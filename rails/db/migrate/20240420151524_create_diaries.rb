class CreateDiaries < ActiveRecord::Migration[7.0]
  def change
    create_table :diaries do |t|
      t.string :title, comment: "タイトル"
      t.text :content, comment: "本文"
      t.string :image_url, null: true, comment: "画像"
      t.integer :word_count, comment: "単語数"
      t.integer :status, comment: "ステータス(10:未保存, 20:非公開, 30:公開)"
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
