class ClusterSignature

  def self.generate_signatures (log_entry)
    signatures = []
    log_entry.words.each_index do |i|
      static_words = log_entry.words.clone
      static_words.delete_at(i)
      signatures << ClusterSignature.new(i, static_words)
    end
    signatures
  end

  def initialize (varword_index, static_words)
    @varword_index = varword_index
    @static_words = static_words
  end

  ## Enable use as Hash key
  attr_reader :varword_index, :static_words
  def == (other)
    self.class === other and
      other.varword_index == @varword_index and
      other.static_words == @static_words
  end
  alias eql? ==

  def hash
    @varword_index.hash ^ @static_words.hash
  end
end
