class CreateSolutions < ActiveRecord::Migration[6.1]
  def change
    create_table :solutions do |t|
      t.string :action_steps

      t.timestamps
    end
  end
end
