class FavoriteSerializer < ActiveModel::Serializer
  attributes :user_id, :diary_id
  belongs_to :user, serializer: UserSerializer
  belongs_to :diary, serializer: DiarySerializer
end
