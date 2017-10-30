class LogEntry
  attr_reader :line, :words

  def initialize (line)
    @line = line
    @words = line.chomp.split(' ')[2..-1]
  end

  def to_s
    @line
  end
end

# LogEntry.new '01-01-2012 19:45:00 Naomi is getting into the car'
