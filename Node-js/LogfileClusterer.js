const ClusterHash = require('./ClusterHash.js')
const LogEntry = require('./LogEntry.js')


let cluster_hash = new ClusterHash()

function analyzeLogline (line) {
  cluster_hash.add(new LogEntry(line))
}

function displayClusters () {
  let is_first_cluster = true
  cluster_hash.each_cluster(cluster => {
    is_first_cluster = is_first_cluster ? false : console.log()
    cluster.log_entries.forEach(le => console.log(le.toString()))
    let words = cluster.changing_words.join(', ')
    console.log("The changing word was: " + words)
  })
}

// Readline code from
// https://nodejs.org/api/readline.html#readline_example_read_file_stream_line_by_line
const readline = require('readline')
const fs = require('fs')
const rl = readline.createInterface({
  input: fs.createReadStream(process.argv[2]),  // 1st arg to script
  crlfDelay: Infinity
})
rl
  .on('line', line => analyzeLogline(line))
  .on('close', displayClusters)
