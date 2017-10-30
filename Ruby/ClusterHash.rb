require './Cluster.rb'
require './ClusterSignature.rb'
require './LogEntry.rb'

class ClusterHash
  def initialize
    @hash = Hash.new {|hash, key| hash[key] = []}
  end

  def add (log_entry)
    ClusterSignature.generate_signatures(log_entry).each do |signature|
      @hash[signature] << log_entry
    end
  end

  def each_cluster
    @hash.each_pair do |signature, log_entries|
      next if log_entries.length == 1

      yield Cluster.new signature, log_entries
    end
  end
end
