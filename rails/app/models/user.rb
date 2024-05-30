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
  VALID_NAME_REGEX = /\A[a-zA-Z]*\z/
  validates :name, presence: true, uniqueness: true, length: { minimum: 3, maximum: 20 }, format: { with: VALID_ACCOUNT_NAME_REGEX }
  validates :first_name, length: { maximum: 15 }, format: { with: VALID_NAME_REGEX }
  validates :last_name, length: { maximum: 15 }, format: { with: VALID_NAME_REGEX }
  validate :country_match_uni
  validate :start_date_before_end_date
  validates :bio, length: { maximum: 600 }



  def follow(other_user)
    following << other_user unless self == other_user
  end

  def unfollow(other_user)
    following.delete(other_user)
  end

  private

    def start_date_before_end_date
      if start_date.present? && end_date.present? && start_date >= end_date
        raise StandardError, "Invaid date"
      end
    end

    def country_match_uni
      if country && uni
        case country
        when "USA"
          unless ['CSUMB', 'Kansas', 'Utah'].include?(uni)
            raise StandardError, "The country and the university do not match"
          end
        when "UK"
          unless ['Aston', 'Canterbury'].include?(uni)
            raise StandardError, "The country and the university do not match"
          end
        when "Australia"
          unless ['Queensland', 'SouthernCross'].include?(uni)
            raise StandardError, "The country and the university do not match"
          end
        when "Canada"
          if uni != 'Alberta'
            raise StandardError, "The country and the university do not match"
          end
        when "NewZealand"
          unless ['Otago', 'Auckland'].include?(uni)
            raise StandardError, "The country and the university do not match"
          end
        else
          raise StandardError, "Country not recognized"
        end
      else
        raise StandardError, "Country or university is missing"
      end
    end
    
end
