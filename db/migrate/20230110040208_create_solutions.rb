class CreateSolutions < ActiveRecord::Migration[6.1]
  def change
    create_table :solutions do |t|
      t.string :action_steps
      t.integer :ticket_id

      t.timestamps
    end
  end
end
