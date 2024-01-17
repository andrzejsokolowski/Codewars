fn are_you_playing_banjo(name: &str) -> String {
   if name.starts_with('R') || name.starts_with('r') {
       return name.to_string() + " plays banjo"
   }
   return name.to_string() + " does not play banjo"
}

