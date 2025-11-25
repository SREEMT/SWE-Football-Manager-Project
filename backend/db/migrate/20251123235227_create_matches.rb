class CreateMatches < ActiveRecord::Migration[8.0]
  def change
    create_table :matches do |t|
      t.time :match_time
      t.date :match_date
      t.string :location
      t.string :team1
      t.string :team2
      t.integer :match_type
      t.json :players
      t.integer :score1
      t.integer :score2

      t.timestamps
    end
  end
end
