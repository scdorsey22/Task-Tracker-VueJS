# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Task.destroy_all

puts "seeding tasks"

Task.create(
    text: "Doctor's Appointment",
    date: "March 5th at 2:30pm",
    reminder: true
)

Task.create(
    text: "Grocery Shopping",
    date: "March 6th at 5pm",
    reminder: false
)
