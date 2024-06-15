class FavoriteSerializer < ActiveModel::Serializer
  attributes :user_id, :diary_id
  belongs_to :user, serializer: UserSerializer
end
