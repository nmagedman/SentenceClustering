require './ClusterHash.rb'
require './LogEntry.rb'


cluster_hash = ClusterHash.new

File.open(ARGV[0]).each do |line|
  cluster_hash.add LogEntry.new(line)
end

is_first_cluster = true
cluster_hash.each_cluster do |changing_word_list, log_entries|
  is_first_cluster = is_first_cluster ? false : puts
  puts log_entries
  puts "The changing word was: #{changing_word_list.join(', ')}"
end
