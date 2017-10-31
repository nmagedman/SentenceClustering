class Cluster {
  constructor(signature, log_entries) {
    let changing_word_index = signature.varword_index
    let changing_words = log_entries.map(log_entry => log_entry.words[changing_word_index])

    this.changing_words = [...new Set(changing_words)]
    this.log_entries = log_entries
  }
}

module.exports = Cluster
