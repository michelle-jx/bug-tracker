class CreateTickets < ActiveRecord::Migration[6.1]
  def change
    create_table :tickets do |t|
      t.string :status
      t.string :priority
      t.string :type
      t.string :author
      t.string :assigned_to
      t.string :eta

      t.timestamps
    end
  end
end
