# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_02_21_221630) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "avatars", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "character_id"
    t.string "name"
    t.integer "face_id"
    t.string "knockout_phrase"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["character_id"], name: "index_avatars_on_character_id"
    t.index ["user_id"], name: "index_avatars_on_user_id"
  end

  create_table "characters", force: :cascade do |t|
    t.string "title"
    t.integer "face_id"
    t.string "imageUrl"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "expressions", force: :cascade do |t|
    t.string "title"
    t.string "imageUrl"
    t.bigint "face_id"
    t.string "category"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["face_id"], name: "index_expressions_on_face_id"
  end

  create_table "faces", force: :cascade do |t|
    t.string "name"
    t.string "initial"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "items", force: :cascade do |t|
    t.string "name"
    t.integer "count", default: 1
    t.integer "damage", default: 1
    t.string "base_imageUrl"
    t.string "throw_imageUrl"
    t.string "splat_imageUrl"
    t.string "base_transition"
    t.string "splat_transition"
    t.string "throw_transition"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "sayings", force: :cascade do |t|
    t.string "phrase"
    t.bigint "avatar_id"
    t.bigint "character_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["avatar_id"], name: "index_sayings_on_avatar_id"
    t.index ["character_id"], name: "index_sayings_on_character_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
