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

      changing_word_index = signature.varword_index
      changing_word_list = log_entries.map do |log_entry|
        log_entry.words[changing_word_index]
      end.uniq

      yield changing_word_list, log_entries
    end
  end
end
