class ChangeDiaryIdTypeInDiaryCommentsAgain < ActiveRecord::Migration[7.0]
  def change
    
    if foreign_key_exists?(:diary_comments, :diary_id)
      remove_foreign_key :diary_comments, :diaries, column: :diary_id
    end

    # diary_idカラムの型をstringに変更する
    change_column :diary_comments, :diary_id, :string

    # 外部キー制約を再度追加する
    add_foreign_key :diary_comments, :diaries, column: :diary_id
  end
end
