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
  has_many :active_relationships, class_name: "Relationship",
                                  foreign_key: "follower_id",
                                  dependent: :destroy,
                                  inverse_of: :follower
  has_many :passive_relationships, class_name: "Relationship",
                                   foreign_key: "followed_id",
                                   dependent: :destroy,
                                   inverse_of: :followed
  has_many :following, through: :active_relationships, source: :followed
  has_many :followers, through: :passive_relationships, source: :follower

  VALID_ACCOUNT_NAME_REGEX = /\A\w+\z/
  VALID_NAME_REGEX = /\A[a-zA-Z]+\z/
  validates :name, presence: true, uniqueness: true, length: { minimum: 3, maximum: 20 }, format: { with: VALID_ACCOUNT_NAME_REGEX }
  validates :first_name, length: { maximum: 15 }, format: { with: VALID_NAME_REGEX }
  validates :last_name, length: { maximum: 15 }, format: { with: VALID_NAME_REGEX }


  def follow(other_user)
    following << other_user unless self == other_user
  end

  def unfollow(other_user)
    following.delete(other_user)
  end
end
