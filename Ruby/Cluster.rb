class Cluster
  attr_reader :changing_words, :log_entries

  def initialize (signature, log_entries)
    changing_word_index = signature.varword_index
    changing_words = log_entries.map do |log_entry|
      log_entry.words[changing_word_index]
    end

    @changing_words = changing_words.uniq
    @log_entries = log_entries
  end
end
