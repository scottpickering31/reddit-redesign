import React from "react";
import PostItem from "./PostItem";
import "./Posts.css";

export default function Posts() {
  const posts = [
    {
      upvote: Math.floor(Math.random() * 403),
      image: `https://picsum.photos/id/${Math.floor(
        Math.random() * 500
      )}/400/300`,
      title:
        "Just Discovered the Coziest Bookstore in a Hidden Alley! 📚🌟 #BookLoversUnite",
      user: "PixelPioneer89",
      subreddit: "politics",
      comment_count: Math.floor(Math.random() * 403),
    },
    {
      upvote: Math.floor(Math.random() * 509),
      image: `https://picsum.photos/id/${Math.floor(
        Math.random() * 500
      )}/400/300`,
      title:
        "I Transformed My Tiny Apartment Balcony into a Jungle Oasis! 🌿🏙️ #UrbanJungleMagic",
      user: "WanderlustDreamer",
      subreddit: "sport",
      comment_count: Math.floor(Math.random() * 509),
    },
    {
      upvote: Math.floor(Math.random() * 5000),
      image: `https://picsum.photos/id/${Math.floor(
        Math.random() * 500
      )}/400/300`,
      title:
        "Crazy Travel Mishaps: How I Ended up on the Wrong Train in a Foreign Country 🚄🌍 #TravelNightmares",
      user: "CatnipConnoisseur",
      subreddit: "world news",
      comment_count: Math.floor(Math.random() * 5000),
    },
    {
      upvote: Math.floor(Math.random() * 500),
      image: `https://picsum.photos/id/${Math.floor(
        Math.random() * 500
      )}/400/300`,
      title:
        "Is This the Best Coffee Hack Ever? Frothy Latte with a Handheld Milk Frother! ☕🥛 #CoffeeLoversDream",
      user: "QuantumQuirk",
      subreddit: "gaming",
      comment_count: Math.floor(Math.random() * 500),
    },
    {
      upvote: Math.floor(Math.random() * 5000),
      image: `https://picsum.photos/id/${Math.floor(
        Math.random() * 500
      )}/400/300`,
      title:
        "Plant Parent Milestone: My Monstera Grew Its First Swiss Cheese Leaf! 🌱🧀 #PlantGoals",
      user: "FitnessFrenzy24",
      subreddit: "geography",
      comment_count: Math.floor(Math.random() * 5000),
    },
    {
      upvote: Math.floor(Math.random() * 500),
      image: `https://picsum.photos/id/${Math.floor(
        Math.random() * 500
      )}/400/300`,
      title:
        "DIY Home Spa Day: Recreating a Luxurious Retreat on a Budget 💆‍♀️✨ #SelfCareSunday",
      user: "SnackAttack123",
      subreddit: "history",
      comment_count: Math.floor(Math.random() * 500),
    },
    {
      upvote: Math.floor(Math.random() * 5000),
      image: `https://picsum.photos/id/${Math.floor(
        Math.random() * 500
      )}/400/300`,
      title:
        "Skywatching Adventures: Caught a Glimpse of the Perseid Meteor Shower! 🌠🔭 #StarryNights",
      user: "StarryEyedGeek",
      subreddit: "science",
      comment_count: Math.floor(Math.random() * 5000),
    },
    {
      upvote: Math.floor(Math.random() * 5000),
      image: `https://picsum.photos/id/${Math.floor(
        Math.random() * 500
      )}/400/300`,
      title:
        "Kitchen Experiment Gone Right: Vegan Brownies That Even Non-Vegans Love! 🍫🌱 #BakingMagic",
      user: "AdventureAwaits22",
      subreddit: "politics",
      comment_count: Math.floor(Math.random() * 5000),
    },
    {
      upvote: Math.floor(Math.random() * 500),
      image: `https://picsum.photos/id/${Math.floor(
        Math.random() * 500
      )}/400/300`,
      title:
        "First-Time Dog Owner Chronicles: Lessons from Surviving Puppy Teething! 🐶😬 #FurParentLife",
      user: "ScienceScribe47",
      subreddit: "humour",
      comment_count: Math.floor(Math.random() * 500),
    },
    {
      upvote: Math.floor(Math.random() * 500),
      image: `https://picsum.photos/id/${Math.floor(
        Math.random() * 50
      )}/400/300`,
      title:
        "Tech Troubles Turned Triumph: How I Rescued My Water-Damaged Laptop 💻💦 #TechRescueStory",
      user: "MovieBuffMarauder",
      subreddit: "current affairs",
      comment_count: Math.floor(Math.random() * 500),
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <PostItem post={post} />
      ))}
    </div>
  );
}
