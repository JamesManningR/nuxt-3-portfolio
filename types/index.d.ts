type Project = {
  title: String,
  date: Date,
  skills: String[],
  thumbnail: URL,
  images: URL[],
  body: String,
  featured: Boolean,
  liveLink?: URL,
  sourceLink?: URL
}
