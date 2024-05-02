class UserSerializer < ActiveModel::Serializer
  attributes :name, :country, :uni, :start_date, :end_date, :bio, :image
end
