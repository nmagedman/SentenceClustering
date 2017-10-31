class ClusterSignature {
  constructor(varword_index, static_words) {
    this.varword_index = varword_index
    this.static_words = static_words
  }

  static generate_signatures(log_entry) {
    let signatures = []
    log_entry.words.forEach((e,i,a) => {
      let static_words = [].concat(log_entry.words)
      static_words.splice(i, 1)
      signatures.push(new ClusterSignature(i, static_words))
    })
    return signatures
  }

  toString() {
    return `ClusterSignature: varword_index=${this.varword_index} static_words=${this.static_words}`
  }
}

module.exports = ClusterSignature
