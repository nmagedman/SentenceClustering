require './ClusterHash.rb'
require './LogEntry.rb'


cluster_hash = ClusterHash.new

File.open(ARGV[0]).each do |line|
  cluster_hash.add LogEntry.new(line)
end

is_first_cluster = true

cluster_hash.each_cluster do |cluster|
  is_first_cluster = (puts unless is_first_cluster)
  puts cluster.log_entries
  puts "The changing word was: #{cluster.changing_words.join(', ')}"
end
