const Cluster = require('./Cluster.js')
const ClusterSignature = require('./ClusterSignature.js')
const LogEntry = require('./LogEntry.js')

class ClusterHash {
  constructor() {
    this.hash = new Map()
  }

  add(log_entry) {
    let signatures = ClusterSignature.generate_signatures(log_entry)
    signatures.forEach(signature => {
      let hashkey = signature.toString()
      if (! this.hash.has(hashkey)) this.hash.set(hashkey, [])
      this.hash.get(hashkey).push(log_entry)
    })
  }

  each_cluster(closure) {
    this.hash.forEach((log_entries, signature_as_string) => {
      if (log_entries.length > 1) {
        // Hack: Recreate a stub ClusterSignature based on its string representation
        let varword_index = new Number(
          signature_as_string.match(/^ClusterSignature: varword_index=(\d+).*/)[1]
        )
        let signature = new ClusterSignature(varword_index, 'ugly hack')

        closure(new Cluster(signature, log_entries))
      }
    })
  }
}

module.exports = ClusterHash
