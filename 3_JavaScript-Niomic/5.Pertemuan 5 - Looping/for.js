function perulanganFor() {
  //   let i = 0;

  for (let i = 0; i < 10; i++) {
    if (i == 5) {
      //break; // Maka Hasilnya akan berhenti jika kondisi mencapai 5
      continue; // Maka Nomor 5 Akan Dilewati
    }
    console.log(`Jalan : ${i}`);
  }
}

perulanganFor();
