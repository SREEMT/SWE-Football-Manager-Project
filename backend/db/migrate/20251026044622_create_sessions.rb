class CreateSessions < ActiveRecord::Migration[8.0]
  def change
    create_table :sessions do |t|
      t.references :user, null: false, foreign_key: true
      t.string :ip_address
      t.string :user_agent
      
      # Optional: Track login and logout times
      #  t.datetime :logged_in_at
      # t.datetime :logged_out_at

      t.timestamps
    end
  end
end
