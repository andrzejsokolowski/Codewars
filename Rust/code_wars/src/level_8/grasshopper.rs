fn get_grade(s1: u16, s2: u16, s3: u16) -> char {
    let average: f32 = (s1 + s2 + s3) as f32/3.0;

    if average >= 90.0 {
        'A'
    } else if average >= 80.0 {
        'B'
    } else if average >= 70.0 {
        'C'
    } else if average >= 60.0 {
        'D'
    }  else {
        'F' 
    }
}