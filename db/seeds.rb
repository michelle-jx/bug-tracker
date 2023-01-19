# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
UserProject.destroy_all
Ticket.destroy_all
Solution.destroy_all
# we're not going to delete projects/tickets, just mark them resolved so don't need dependent destroy

user1 = User.create(name: "Michelle", username: "michelle", password: '1234', admin: true)
user2 = User.create(name: "Bruce Wayne", username: "batman", password: 'robin', admin: false)

proj1 = Project.create(title: 'Bug Tracker', description: 'everything is still broken', contributors: user1.name)
proj2 = Project.create(title: 'Batmobile', description: 'Engine will not start', contributors: user2.name)

ticket1 = Ticket.create(status: 'assigned', priority: 'low', issue: 'bug', author: user1.name, eta: 10, user_id: user1.id, project_id: proj1.id)
ticket2 = Ticket.create(status: 'on hold', priority: 'medium', issue: 'request', author: user2.name, eta: 30, user_id: user1.id, project_id: proj2.id)
ticket3 = Ticket.create(status: 'in progress', priority: 'low', issue: 'task', author: user1.name, eta: 5, user_id: user2.id, project_id: proj2.id)
ticket4 = Ticket.create(status: 'resolved', priority: 'high', issue: 'task', author: user2.name, eta: 0, user_id: user1.id, project_id: proj1.id)
ticket5 = Ticket.create(status: 'on hold', priority: 'low', issue: 'task', author: user1.name, eta: 30, user_id: user2.id, project_id: proj2.id)

up1 = UserProject.create(user_id: 1, project_id: 2)
up1 = UserProject.create(user_id: 2, project_id: 1)

sol1 = Solution.create(action_steps: '', ticket_id: ticket1.id)
sol2 = Solution.create(action_steps: '', ticket_id: ticket2.id)

puts '🌱 Done seeding! 🌱'
