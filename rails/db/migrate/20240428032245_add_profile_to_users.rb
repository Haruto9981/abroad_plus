class AddProfileToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :country, :string, null: true, comment: "留学先の国"
    add_column :users, :uni, :string, null: true, comment: "留学先の大学"
    add_column :users, :start_date, :date, null: true, comment: "留学開始日"
    add_column :users, :end_date, :date, null: true, comment: "留学終了日"
    add_column :users, :bio, :text, null: true, comment: "自己紹介"
  end
end
