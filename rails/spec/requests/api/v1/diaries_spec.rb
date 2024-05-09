require "rails_helper"

RSpec.describe "Api::V1::Diaries", type: :request do
  describe "GET api/v1/diaries" do
    subject { get(api_v1_diaries_path(params)) }

    before do
      create_list(:diary, 25, status: :shared)
      create_list(:diary, 8, status: :personal)
    end

    context "page を params で送信しない時" do
      let(:params) { nil }

      it "1ページ目のレコード10件取得できる" do
        subject
        res = JSON.parse(response.body)
        expect(res.keys).to eq ["diaries", "meta"]
        expect(res["diaries"].length).to eq 10
        expect(res["diaries"][0].keys).to eq ["id", "title", "content", "image", "word_count", "status", "day", "month_name", "month",
                                              "year", "w_day", "created_at", "user", "favorites"]
        expect(res["diaries"][0]["user"].keys).to eq ["name", "country", "uni", "start_date", "end_date", "bio", "image"]
        expect(res["meta"].keys).to eq ["current_page", "total_pages"]
        expect(res["meta"]["current_page"]).to eq 1
        expect(res["meta"]["total_pages"]).to eq 3
        expect(response).to have_http_status(:ok)
      end
    end

    context "pageをparams で送信した時" do
      let(:params) { { page: 2 } }

      it "該当ページ目のレコード10件取得できる" do
        subject
        res = JSON.parse(response.body)
        expect(res.keys).to eq ["diaries", "meta"]
        expect(res["diaries"].length).to eq 10
        expect(res["diaries"][0].keys).to eq ["id", "title", "content", "image", "word_count", "status", "day", "month_name", "month",
                                              "year", "w_day", "created_at", "user", "favorites"]
        expect(res["diaries"][0]["user"].keys).to eq ["name", "country", "uni", "start_date", "end_date", "bio", "image"]
        expect(res["meta"].keys).to eq ["current_page", "total_pages"]
        expect(res["meta"]["current_page"]).to eq 2
        expect(res["meta"]["total_pages"]).to eq 3
        expect(response).to have_http_status(:ok)
      end
    end
  end

  describe "GET api/v1/diaries/:id" do
    subject { get(api_v1_diary_path(diary_id)) }

    let(:diary) { create(:diary, status:) }

    context "diary_id に対応するdiariesレコードが存在する時" do
      let(:diary_id) { diary.id }

      context "diariesレコードのステータスが公開の場合" do
        let(:status) { :shared }

        it "正常にレコードを取得できる" do
          subject
          res = JSON.parse(response.body)
          expect(res.keys).to eq ["id", "title", "content", "image", "word_count", "status", "day", "month_name", "month",
                                  "year", "w_day", "created_at", "user", "favorites"]
          expect(res["user"].keys).to eq ["name", "country", "uni", "start_date", "end_date", "bio", "image"]
          expect(response).to have_http_status(:ok)
        end
      end

      context "diariesレコードのステータスが非公開の場合" do
        let(:status) { :personal }

        it "ActiveRecord::RecordNotFound エラーが返る" do
          expect { subject }.to raise_error(ActiveRecord::RecordNotFound)
        end
      end
    end

    context "diary_idに対応する articlesレコードが存在しない時" do
      let(:diary_id) { 10_000_000_000 }

      it "ActiveRecord::RecordNotFound エラーが返る" do
        expect { subject }.to raise_error(ActiveRecord::RecordNotFound)
      end
    end
  end
end
