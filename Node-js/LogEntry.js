class LogEntry {
  constructor(line) {
    this.line = line
    this.words = line.trim().split(' ')
    this.words.splice(0, 2)  // Drop the timestamp
  }

  toString() {
    return this.line
  }
}

module.exports = LogEntry
