#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![generate_image])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
fn generate_image(height: usize, width: usize, r: u8, g: u8, b: u8) -> Vec<u8> {
  let mut image: Vec<u8> = vec![0; height * width * 4];

  for j in 0..height {
    for i in 0..width {
      image[j * width * 4 + i * 4 + 0] = r;
      image[j * width * 4 + i * 4 + 1] = g;
      image[j * width * 4 + i * 4 + 2] = b;
      image[j * width * 4 + i * 4 + 3] = 255;

    }
  }

  return image;
}