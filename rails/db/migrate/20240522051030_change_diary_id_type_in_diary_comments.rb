class ChangeDiaryIdTypeInDiaryComments < ActiveRecord::Migration[7.0]
  def change
    change_column :diary_comments, :diary_id, :string
  end
end
