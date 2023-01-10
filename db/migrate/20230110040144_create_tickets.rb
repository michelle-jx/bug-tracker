class CreateTickets < ActiveRecord::Migration[6.1]
  def change
    create_table :tickets do |t|
      t.string :status
      t.string :priority
      t.string :issue
      t.string :author
      t.integer :eta
      t.integer :user_id
      t.integer :project_id

      t.timestamps
    end
  end
end
