class CurrentUserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :country, :uni, :start_date, :end_date, :bio, :image
  has_many :following
end
