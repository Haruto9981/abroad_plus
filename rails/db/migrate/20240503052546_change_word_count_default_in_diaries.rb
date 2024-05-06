class ChangeWordCountDefaultInDiaries < ActiveRecord::Migration[7.0]
  def change
    change_column :diaries, :word_count, :integer, default: 0
  end
end
