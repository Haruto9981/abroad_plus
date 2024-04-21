require "rails_helper"

RSpec.describe "Api::V1::Current::Diaries", type: :request do
  describe "POST api/v1/current/diaries" do
    subject { post(api_v1_current_diaries_path, headers:) }

    let(:headers) { current_user.create_new_auth_token }
    let(:current_user) { create(:user) }

    context "ログインユーザーに紐づく未保存ステータスの日記が0件の時" do
      it "未保存ステータスの日記が新規作成される" do
        expect { subject }.to change { current_user.diaries.count }.by(1)
        expect(current_user.diaries.last).to be_unsaved
        res = JSON.parse(response.body)
        expect(res.keys).to eq ["id", "title", "content", "image_url", "word_count", "status", "created_at", "from_today", "user"]
        expect(res["user"].keys).to eq ["name"]
        expect(response).to have_http_status(:ok)
      end
    end

    context "ログインユーザーに紐づく未保存ステータスの日記が1件の時" do
      before { create(:diary, user: current_user, status: :unsaved) }

      it "未保存ステータスの日記は新規作成されない" do
        expect { subject }.not_to change { current_user.diaries.count }
        res = JSON.parse(response.body)
        expect(res.keys).to eq ["id", "title", "content", "image_url", "word_count", "status", "created_at", "from_today", "user"]
        expect(res["user"].keys).to eq ["name"]
        expect(response).to have_http_status(:ok)
      end
    end
  end

  describe "PATCH api/v1/current/diaries" do
    subject { patch(api_v1_current_diary_path(id), headers:, params:) }

    let(:headers) { current_user.create_new_auth_token }
    let(:current_user) { create(:user) }
    let(:other_user) { create(:user) }
    let(:params) { { "diary": { "title": "テストタイトル2", "content": "テスト本文2", "status": "shared" } } }

    context ":id がログインユーザーに紐づく articles レコードの id である時" do
      let(:current_user_diary) { create(:diary, title: "テストタイトル1", content: "テスト本文1", status: :personal, user: current_user) }
      let(:id) { current_user_diary.id }

      it "正常にレコードを更新できる" do
        expect { subject }.to change { current_user_diary.reload.title }.from("テストタイトル1").to("テストタイトル2") and
          change { current_user_diary.reload.content }.from("テスト本文1").to("テスト本文2") and
          change { current_user_diary.reload.status }.from("personal").to("shared")
        res = JSON.parse(response.body)
        expect(res.keys).to eq ["id", "title", "content", "image_url", "word_count", "status", "created_at", "from_today", "user"]
        expect(res["user"].keys).to eq ["name"]
        expect(response).to have_http_status(:ok)
      end
    end

    context ":id がログインユーザーに紐づく diaries レコードの id ではない時" do
      let(:other_user_diary) { create(:diary, user: other_user) }
      let(:id) { other_user_diary.id }

      it "例外が発生する" do
        expect { subject }.to raise_error(ActiveRecord::RecordNotFound)
      end
    end
  end
end
