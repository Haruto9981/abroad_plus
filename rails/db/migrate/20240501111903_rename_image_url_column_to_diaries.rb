class RenameImageUrlColumnToDiaries < ActiveRecord::Migration[7.0]
  def change
    rename_column :diaries, :image_url, :image
  end
end
