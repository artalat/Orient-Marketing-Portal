class CreateAvatars < ActiveRecord::Migration
  def change
    create_table :avatars do |t|
      t.string :avatar_file_name
      t.string :avatar_content_type
      t.integer :avatar_file_size
      t.integer :avatarable_id
      t.string :avatarable_type

      t.timestamps
    end
  end
end
