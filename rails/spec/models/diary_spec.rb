require "rails_helper"

RSpec.describe Diary, type: :model do
  context "factoryのデフォルト設定に従った時" do
    subject { create(:diary) }

    it "正常にレコードを新規作成できる" do
      expect { subject }.to change { Diary.count }.by(1)
    end
  end

  describe "Validations" do
    subject { diary.valid? }

    let(:diary) { build(:diary, title:, content:, status:, word_count:, user:) }
    let(:title) { Faker::Lorem.sentence }
    let(:content) { Faker::Lorem.paragraph }
    let(:word_count) { Faker::Number.number(digits: 3) }
    let(:status) { :shared }
    let(:user) { create(:user) }

    context "全ての値が正常な時" do
      it "検証が通る" do
        expect(subject).to be_truthy
      end
    end

    context "ステータスが公開済みかつ、タイトルが空の時" do
      let(:title) { "" }

      it "エラーメッセージが返る" do
        expect(subject).to be_falsy
        expect(diary.errors.full_messages).to eq ["タイトルを入力してください"]
      end
    end

    context "ステータスが公開済みかつ、本文が空の時" do
      let(:content) { "" }

      it "エラーメッセージが返る" do
        expect(subject).to be_falsy
        expect(diary.errors.full_messages).to eq ["本文を入力してください"]
      end
    end

    # context "ステータスが未保存かつ、すでに同一ユーザーが未保存ステータスの記事を所有していた時" do
    #   let(:status) { :unsaved }
    #   before { create(:diary, status: :unsaved, user:) }

    #   it "例外が発生する" do
    #     expect { subject }.to raise_error(StandardError)
    #   end
    # end
  end
end
