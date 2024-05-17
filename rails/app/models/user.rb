# frozen_string_literal: true

class User < ApplicationRecord
  mount_uploader :image, ImageUploader
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :confirmable
  include DeviseTokenAuth::Concerns::User
  has_many :diaries, dependent: :destroy
  has_many :favorites, dependent: :destroy
  has_many :diary_comments, dependent: :destroy
  VALID_ACCOUNT_NAME_REGEX = /\A[a-zA-Z0-9]+\z/ # 半角英数字のみ受け付ける正規表現
  validates :name, presence: true, uniqueness: true, length: { minimum: 3, maximum: 25 }, format: { with: VALID_ACCOUNT_NAME_REGEX }
end
