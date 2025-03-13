<template>
  <!-- HEADER -->
  <header class="w-full border-b border-[#EDEDED] bg-white">
    <div class="flex items-center justify-between mx-auto max-w-7xl py-4 px-4 lg:px-16">
      <img class="size-10 md:size-12" src="@/assets/img/logo.svg" alt="ButterPOS Logo" />

      <!-- Toggle bahasa (contoh statis) -->
      <LanguageSelector />
    </div>
  </header>

  <!-- BODY / CONTENT -->
  <div class="flex-grow pt-4 pb-12 md:py-10 px-4">
    <div class="tabs max-w-[924px] w-full mx-auto flex flex-col gap-4">
      <!-- Kartu informasi vendor -->
      <div
        class="flex flex-col md:flex-row items-start md:items-center gap-5 p-4 md:p-5 rounded-lg border border-[#EDEDED] bg-white">
        <div class="size-[60px] md:size-20 rounded-lg border border-[#D6D6D6] overflow-hidden">
          <img class="size-full object-contain" src="@/assets/img/sinamon-logo.svg" alt="Sinamon logo" />
        </div>
        <div>
          <div class="mb-4 md:mb-3 text-xl md:text-2xl text-[#080808] font-bold">
            PT Sinamon Group Indonesia
          </div>
          <div class="flex items-start md:items-center gap-2">
            <svg class="size-5 text-[#989898]" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <div class="text-sm text-[#525252]">
              Jakarta Timur, Indonesia · sinamon.indonesia@gmail.com
            </div>
          </div>
        </div>
      </div>

      <!-- TAB LINKS -->
      <div class="relative rounded-lg border border-[#EDEDED] overflow-hidden">
        <div class="tab-links flex items-center justify-start gap-2 md:gap-4 bg-white p-3 rounded-lg overflow-x-auto">
          <!-- Gradasi kanan-kiri untuk efek scroll -->
          <div
            class="absolute md:hidden right-0 top-0 h-full w-6 pointer-events-none bg-gradient-to-l from-white to-white/0">
          </div>
          <div
            class="absolute md:hidden left-0 top-0 h-full w-6 pointer-events-none bg-gradient-to-r from-white to-white/0">
          </div>

          <!-- Buat link dinamis berdasarkan steps -->
          <!-- <a v-for="(label, index) in tabLabels" :key="index" class="whitespace-nowrap py-2 px-3 text-[#525252] text-sm font-medium rounded
                     [&.active]:bg-[#F4F6FF] [&.active]:text-[#0023BD]"
            :class="currentStep === steps[index] ? 'bg-[#F4F6FF] text-[#0023BD]' : ''" @click.prevent="goToStep(index)">
            {{ label }}
          </a> -->
          <a v-for="(label, index) in tabLabels" :key="index"
            :class="[(currentStep === steps[index] ? 'active' : ''), 'whitespace-nowrap py-2 px-3 text-[#525252] [&.active]:bg-[#F4F6FF] [&.active]:text-[#0023BD] text-sm font-medium rounded']"
            style="cursor: pointer;" @click.prevent="goToStep(index)">
            {{ label }}
          </a>
        </div>
      </div>

      <!-- TAB CONTENTS -->
      <div>
        <div class="tab-contents mb-6 md:mb-8">
          <!-- Pendahuluan -->
          <section v-show="currentStep === 'pendahuluan'"
            class="flex flex-col text-sm md:text-base gap-3 text-[#080808] bg-white border border-[#EDEDED] p-4 md:p-5 rounded-lg">
            <div class="text-lg md:text-xl font-bold">Perjanjian Vendor</div>
            <div>
              Pada hari ini, [tanggal penandatanganan], telah terjadi kesepakatan antara:
            </div>
            <ol class="list-decimal list-outside pl-5 [&>li::marker]:font-bold">
              <li>
                <span class="font-bold">PT Manhattan Slice Indonesia</span> (selanjutnya disebut
                "Pihak Pertama"), berkedudukan di [alamat kantor], dan
              </li>
              <li>
                <span class="font-bold">[Nama Vendor / Perusahaan Vendor]</span> (selanjutnya
                disebut "Pihak Kedua"), yang diwakili oleh [Nama PIC], berkedudukan di [alamat
                vendor],
              </li>
            </ol>
            <div>secara bersama-sama selanjutnya disebut "Para Pihak".</div>
            <div>
              <span class="font-bold">Para Pihak</span> dengan ini sepakat untuk mengikatkan diri
              dalam Perjanjian Vendor ("Perjanjian") sebagai berikut:
            </div>
          </section>

          <!-- Pasal 1 -->
          <section v-show="currentStep === 'pasal_1'"
            class="flex flex-col text-sm md:text-base gap-3 text-[#080808] bg-white border border-[#EDEDED] p-4 md:p-5 rounded-lg">
            <div class="text-lg md:text-xl font-bold">Pasal 1</div>
            <div class="text-base md:text-lg font-semibold">Ruang Lingkup Kerja</div>
            <ol class="list-decimal list-outside pl-5">
              <li>
                Pihak Kedua setuju untuk menyediakan jasa/layanan/produk sebagai kontraktor bagi
                Pihak Pertama.
              </li>
              <li>
                Pihak Kedua bertanggung jawab untuk menyerahkan hasil kerja atau produk sesuai
                dengan ketentuan yang telah ditentukan oleh Pihak Pertama.
              </li>
            </ol>
          </section>

          <!-- Pasal 2 -->
          <section v-show="currentStep === 'pasal_2'"
            class="flex flex-col text-sm md:text-base gap-3 text-[#080808] bg-white border border-[#EDEDED] p-4 md:p-5 rounded-lg">
            <div class="text-lg md:text-xl font-bold">Pasal 2</div>
            <div class="text-base md:text-lg font-semibold">Ketentuan Pajak</div>
            <ol class="list-decimal list-outside pl-5">
              <li>
                Setiap faktur/invoice yang diajukan oleh Pihak Kedua, jika Pihak Kedua adalah
                perorangan (individu), maka akan dikenakan pemotongan pajak PPh Pasal 21.
              </li>
              <li>
                Jika Pihak Kedua berbentuk badan usaha/perusahaan, maka akan dikenakan pemotongan
                pajak PPh Pasal 23.
              </li>
              <li>
                Pihak Pertama akan menerbitkan bukti potong (bukti pemotongan pajak) dan
                mengirimkannya kepada Pihak Kedua dalam jangka waktu 7 (tujuh) hari kerja setelah
                pembayaran dilakukan.
              </li>
            </ol>
          </section>

          <!-- Pasal 3 -->
          <section v-show="currentStep === 'pasal_3'"
            class="flex flex-col text-sm md:text-base gap-3 text-[#080808] bg-white border border-[#EDEDED] p-4 md:p-5 rounded-lg">
            <div class="text-lg md:text-xl font-bold">Pasal 3</div>
            <div class="text-base md:text-lg font-semibold">Jadwal Pembayaran</div>
            <ol class="list-decimal list-outside pl-5">
              <li>
                Pihak Pertama akan melakukan pembayaran kepada Pihak Kedua pada tanggal 5 (lima)
                dan 20 (dua puluh) setiap bulannya.
              </li>
              <li>
                Apabila tanggal 5 (lima) atau 20 (dua puluh) bertepatan dengan hari libur nasional
                atau akhir pekan, maka pembayaran akan diproses pada hari kerja berikutnya.
              </li>
              <li>
                Pembayaran lebih awal (di luar jadwal) dapat dipertimbangkan secara case by case
                dan memerlukan persetujuan Manajemen Pihak Pertama.
              </li>
            </ol>
          </section>

          <!-- Pasal 4 -->
          <section v-show="currentStep === 'pasal_4'"
            class="flex flex-col text-sm md:text-base gap-3 text-[#080808] bg-white border border-[#EDEDED] p-4 md:p-5 rounded-lg">
            <div class="text-lg md:text-xl font-bold">Pasal 4</div>
            <div class="text-base md:text-lg font-semibold">Anti-Kickback dan Anti-Fraud</div>
            <ol class="list-decimal list-outside pl-5">
              <li>
                Pihak Kedua sepakat untuk tidak memberikan imbalan, hadiah, atau bentuk kompensasi
                lain secara langsung maupun tidak langsung kepada karyawan atau perwakilan Pihak
                Pertama.
              </li>
              <li>
                Jika terdapat bukti bahwa Pihak Kedua telah memberikan kickback atau terlibat dalam
                tindakan penipuan (fraud) apa pun, Pihak Pertama berhak menempuh jalur hukum di
                pengadilan di Indonesia.
              </li>
              <li>
                Pihak Pertama memiliki program reward untuk mencegah kecurangan, di mana jika Pihak
                Kedua mengetahui adanya permintaan kickback atau praktik kecurangan oleh karyawan
                Pihak Pertama, dan dapat memberikan bukti yang cukup, maka Pihak Pertama akan
                memberikan reward sebesar Rp 10.000.000 (sepuluh juta Rupiah) kepada pelapor.
              </li>
            </ol>
          </section>

          <!-- Pasal 5 -->
          <section v-show="currentStep === 'pasal_5'"
            class="flex flex-col text-sm md:text-base gap-3 text-[#080808] bg-white border border-[#EDEDED] p-4 md:p-5 rounded-lg">
            <div class="text-lg md:text-xl font-bold">Pasal 5</div>
            <div class="text-base md:text-lg font-semibold">Data Pihak Kedua</div>
            <div>Pihak Kedua wajib melampirkan dan/atau mencantumkan data berikut:</div>
            <ol class="list-decimal list-outside pl-5 font-medium">
              <li>Nama Lengkap (sesuai KTP).</li>
              <li>Nomor KTP.</li>
              <li>Nomor NPWP.</li>
              <li>Nama Perusahaan (Jika berbentuk badan usaha).</li>
              <li>Nama PIC / Penanggung Jawab.</li>
              <li>Nomor Telepon.</li>
              <li>Alamat Email (opsional).</li>
              <li>Data Rekening Bank.</li>
              <ul class="list-disc list-outside pl-6">
                <li>Nama Bank.</li>
                <li>Nomor Rekening.</li>
                <li>Nama Pemilik Rekening.</li>
              </ul>
            </ol>
          </section>

          <!-- Pasal 6 -->
          <section v-show="currentStep === 'pasal_6'"
            class="flex flex-col text-sm md:text-base gap-3 text-[#080808] bg-white border border-[#EDEDED] p-4 md:p-5 rounded-lg">
            <div class="text-lg md:text-xl font-bold">Pasal 6</div>
            <div class="text-base md:text-lg font-semibold">
              Hukum yang Berlaku dan Penyelesaian Sengketa
            </div>
            <ol class="list-decimal list-outside pl-5">
              <li>
                Perjanjian ini diatur oleh dan ditafsirkan sesuai dengan hukum yang berlaku di
                Republik Indonesia.
              </li>
              <li>
                Jika terjadi perselisihan atau sengketa sehubungan dengan Perjanjian ini, Para Pihak
                setuju untuk menyelesaikannya secara musyawarah untuk mufakat.
              </li>
              <li>
                Apabila musyawarah tidak mencapai kesepakatan, maka sengketa akan diselesaikan
                melalui jalur hukum di pengadilan yang berwenang di Indonesia.
              </li>
            </ol>
          </section>

          <!-- Pasal 7 -->
          <section v-show="currentStep === 'pasal_7'"
            class="flex flex-col text-sm md:text-base gap-3 text-[#080808] bg-white border border-[#EDEDED] p-4 md:p-5 rounded-lg">
            <div class="text-lg md:text-xl font-bold">Pasal 7</div>
            <div class="text-base md:text-lg font-semibold">Penutup</div>
            <ol class="list-decimal list-outside pl-5">
              <li>
                Perjanjian ini mulai berlaku efektif sejak tanggal ditandatangani oleh Para Pihak
                dan akan tetap berlaku sepanjang belum diakhiri oleh salah satu Pihak dengan
                pemberitahuan tertulis sesuai ketentuan dalam Perjanjian.
              </li>
              <li>
                Dengan menandatangani Perjanjian ini, Pihak Kedua menyatakan telah membaca,
                memahami, dan menyetujui seluruh isi Perjanjian tanpa ada paksaan dari pihak
                manapun.
              </li>
            </ol>
            <div>
              Demikian Perjanjian ini dibuat dalam rangkap 2 (dua) yang masing-masing bermaterai
              cukup dan mempunyai kekuatan hukum yang sama.
            </div>
          </section>

          <!-- FORM PERSETUJUAN -->
          <section v-show="currentStep === 'form_persetujuan'"
            class="md:block:opacity-100 text-sm md:text-base gap-6 md:gap-10 text-[#080808] bg-white border border-[#EDEDED] p-4 md:p-5 rounded-lg">
            <!-- Form persetujuan -->
            <form class="flex flex-col gap-6 md:gap-10">
              <div>
                <div class="text-lg md:text-xl font-bold mb-3">Informasi Pribadi</div>
                <div class="space-y-4">
                  <!-- Nama lengkap -->
                  <div>
                    <label for="nama_lengkap" class="font-medium block after:content-['*'] after:text-[#E21717] mb-2">
                      Nama Lengkap (sesuai KTP)
                    </label>
                    <input type="text" id="nama_lengkap" placeholder="Nama lengkap"
                      class="w-full block rounded border border-[#D6D6D6] outline-none p-3 placeholder:text-[#989898]" />
                  </div>
                  <!-- Nomor Identitas -->
                  <div>
                    <label for="nomor_identitas"
                      class="font-medium block after:content-['*'] after:text-[#E21717] mb-2">
                      Nomor Identitas / KTP
                    </label>
                    <input type="number" id="nomor_identitas" placeholder="1234567890"
                      class="w-full block rounded border border-[#D6D6D6] outline-none p-3 placeholder:text-[#989898]" />
                  </div>
                  <!-- Unggah KTP -->
                  <div>
                    <div class="font-medium block after:content-['*'] after:text-[#E21717] mb-2">
                      Unggah Foto Identitas / KTP
                    </div>
                    <label for="upload_ktp"
                      class="block rounded-lg bg-[#F8F8F8] border border-dashed border-[#D6D6D6] p-[18px] cursor-pointer">
                      <input id="upload_ktp" type="file" hidden />
                      <div class="flex items-center justify-center gap-2">
                        <img class="size-5 object-contain" src="@/assets/img/svg/upload.svg" alt="Upload" />
                        <div class="text-sm font-medium text-[#797979]">Klik untuk mengunggah</div>
                      </div>
                    </label>
                  </div>
                  <!-- Nomor NPWP -->
                  <div>
                    <label for="nomor_npwp" class="font-medium block after:content-['*'] after:text-[#E21717] mb-2">
                      Nomor NPWP
                    </label>
                    <input type="number" id="nomor_npwp" placeholder="1234567890"
                      class="w-full block rounded border border-[#D6D6D6] outline-none p-3 placeholder:text-[#989898]" />
                  </div>
                  <!-- Unggah NPWP -->
                  <div>
                    <div class="font-medium block after:content-['*'] after:text-[#E21717] mb-2">
                      Unggah Foto NPWP
                    </div>
                    <label for="upload_npwp"
                      class="block rounded-lg bg-[#F8F8F8] border border-dashed border-[#D6D6D6] p-[18px] cursor-pointer">
                      <input id="upload_npwp" type="file" hidden />
                      <div class="flex items-center justify-center gap-2">
                        <img class="size-5 object-contain" src="@/assets/img/svg/upload.svg" alt="Upload" />
                        <div class="text-sm font-medium text-[#797979]">Klik untuk mengunggah</div>
                      </div>
                    </label>
                  </div>
                  <!-- Nomor WhatsApp -->
                  <div>
                    <label for="nomor_wa" class="font-medium block after:content-['*'] after:text-[#E21717] mb-2">
                      Nomor WhatsApp
                    </label>
                    <div class="relative">
                      <div
                        class="absolute top-0 left-0 flex items-center gap-2 bg-[#F8F8F8] py-2.5 px-3 md:p-3 border border-[#D6D6D6] rounded-l">
                        <img class="size-6" src="@/assets/img/svg/flag-indonesia.svg" alt="Flag indonesia" />
                        <svg class="size-4 text-[#525252]" fill="none" stroke-width="2" stroke="currentColor"
                          viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      </div>
                      <div
                        class="absolute text-sm md:text-base text-[#525252] font-medium left-[84px] top-1/2 -translate-y-1/2">
                        +62
                      </div>
                      <input type="number" id="nomor_wa" placeholder="1234567890"
                        class="w-full block rounded border border-[#D6D6D6] outline-none py-3 pr-3 pl-[119px] md:pl-[123px] placeholder:text-[#989898]" />
                    </div>
                  </div>
                </div>
              </div>

              <!-- Informasi Perusahaan -->
              <div>
                <div class="text-lg md:text-xl font-bold mb-3">Informasi Perusahaan</div>
                <div class="space-y-4">
                  <div>
                    <label for="nama_perusahaan" class="font-medium block mb-2">
                      Nama Perusahaan
                      <span class="text-[#989898]">(jika berbentuk badan usaha)</span>
                    </label>
                    <input type="text" id="nama_perusahaan" placeholder="Nama perusahaan"
                      class="w-full block rounded border border-[#D6D6D6] outline-none p-3 placeholder:text-[#989898]" />
                  </div>
                  <div>
                    <label for="nama_penanggung_jawab"
                      class="font-medium block after:content-['*'] after:text-[#E21717] mb-2">
                      Nama Penanggung Jawab / PIC
                    </label>
                    <input type="text" id="nama_penanggung_jawab" placeholder="Nama penanggung jawab"
                      class="w-full block rounded border border-[#D6D6D6] outline-none p-3 placeholder:text-[#989898]" />
                  </div>
                  <div>
                    <label for="email" class="font-medium block mb-2">
                      Alamat Email <span class="text-[#989898]">(opsional)</span>
                    </label>
                    <input type="text" id="email" placeholder="Alamat email"
                      class="w-full block rounded border border-[#D6D6D6] outline-none p-3 placeholder:text-[#989898]" />
                  </div>
                </div>
              </div>

              <!-- Informasi Rekening Bank -->
              <div>
                <div class="text-lg md:text-xl font-bold mb-3">Informasi Rekening Bank</div>
                <div class="space-y-4">
                  <div>
                    <label class="font-medium block after:content-['*'] after:text-[#E21717] mb-2">Nama Bank
                    </label>
                    <div class="relative dropdown">
                      <div
                        class="cursor-pointer dropdown-toggle flex items-center justify-between gap-2 w-full rounded border border-[#D6D6D6] outline-none p-3">
                        <div class="dropdown-text">Pilih Bank</div>
                        <svg class="size-6" fill="none" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      </div>
                      <!-- Dropdown menu (static contoh) -->
                      <div
                        class="absolute dropdown-menu top-[calc(100%+8px)] left-0 pt-4 px-4 w-full border border-[#EDEDED] rounded overflow-hidden bg-white z-20 shadow-[0_2px_5px_0px_rgba(8,8,8,0.04),0_10px_10px_0px_rgba(8,8,8,0.03),0_22px_13px_0_rgba(8,8,8,0.02),0_40px_16px_0_rgba(8,8,8,0.01),0_62px_17px_0_rgba(8,8,8,0)] hidden">
                        <!-- dsb -->
                      </div>
                    </div>
                  </div>
                  <div>
                    <label for="nomor_rekening"
                      class="font-medium block after:content-['*'] after:text-[#E21717] mb-2">Nomor Rekening
                    </label>
                    <div class="relative">
                      <input type="text" id="nomor_rekening" placeholder="012345678912"
                        class="w-full block rounded border border-[#D6D6D6] outline-none p-3 placeholder:text-[#989898]" />
                      <a href="#"
                        class="text-[#0023BD] text-sm font-semibold absolute top-1/2 -translate-y-1/2 right-3">Validate</a>
                    </div>
                    <div class="mt-2 text-[#E21717] text-xs md:text-sm">
                      Informasi rekening tidak ditemukan, periksa kembali data yang dimasukkan.
                    </div>
                  </div>
                  <div>
                    <label for="nama_pemilik_rekening"
                      class="font-medium block after:content-['*'] after:text-[#E21717] mb-2">Nama Pemilik Rekening
                    </label>
                    <input type="text" id="nama_pemilik_rekening" placeholder="-" disabled
                      class="w-full block rounded border border-[#D6D6D6] disabled:bg-[#EDEDED] outline-none p-3 placeholder:text-[#989898]" />
                  </div>
                </div>
              </div>
            </form>

            <!-- Tanda Tangan Kontrak -->
            <div class="mt-4 bg-white border border-[#EDEDED] p-4 md:p-5 rounded-lg">
              <div class="font-bold text-xl after:content-['*'] after:text-[#E21717] mb-4">
                Tanda Tangan Kontrak
              </div>
              <button data-modal-target="signage_modal"
                class="cursor-pointer w-full flex items-center justify-center gap-2 h-[164px] bg-[#F4F6FF] border border-dashed border-[#0433FF] rounded-lg">
                <img class="size-5" src="@/assets/img/svg/edit.svg" alt="Edit icon" />
                <div class="text-sm font-medium text-[#525252]">Klik untuk Tanda Tangan</div>
              </button>
              <!-- Contoh pratinjau tanda tangan -->
              <div
                class="mt-3 relative cursor-pointer flex items-center justify-center gap-2 h-[164px] border border-dashed border-[#0433FF] rounded-lg">
                <img class="w-36 h-full max-h-[108px] object-contain" src="@/assets/img/signage.svg" alt="Signage" />
                <div class="absolute bottom-3 md:bottom-4 right-3 md:right-4 flex items-center gap-4">
                  <button class="flex items-center gap-2 cursor-pointer">
                    <img class="size-5" src="@/assets/img/svg/edit-2.svg" alt="Edit icon" />
                    <div class="text-sm font-medium text-[#525252]">Edit</div>
                  </button>
                  <svg class="cursor-pointer size-5 text-[#CA0A0A]" fill="none" stroke-width="2" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- BUTTONS Next / Prev / Submit -->
        <div class="flex items-center flex-col md:flex-row gap-3 md:gap-4">
          <!-- Tombol Sebelumnya -->
          <button
            class="md:order-1 order-2 rounded bg-white border border-[#B2B2B2] text-[#080808] py-3 px-6 text-center w-full font-semibold cursor-pointer"
            :disabled="currentIndex === 0" @click="prevStep">
            Sebelumnya
          </button>

          <!-- Tombol Selanjutnya -->
          <button v-if="currentIndex < steps.length - 1"
            class="md:order-2 order-1 rounded bg-[#0433FF] border border-[#0433FF] text-white py-3 px-6 text-center w-full font-semibold cursor-pointer"
            @click="nextStep">
            Selanjutnya
          </button>

          <!-- Tombol Submit (hanya muncul di step terakhir) -->
          <a v-else href="success.html"
            class="md:order-2 order-1 rounded bg-[#0433FF] text-white py-3 px-6 text-center w-full font-semibold cursor-pointer">
            {{ t('form.submit') }}
            <!-- Submit -->
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL TANDA TANGAN -->
  <div id="signage_modal"
    class="fixed modal top-0 left-0 w-screen h-screen bg-[#080808]/40 flex items-end md:items-center justify-center md:p-6">
    <div class="modal-content bg-white rounded-t-2xl md:rounded-lg px-4 pt-4 pb-6 md:p-6 w-full md:w-[800px]">
      <div class="flex items-center justify-between mb-5">
        <div class="text-lg md:text-xl font-semibold text-[#080808]">Buat Tanda Tangan</div>
        <button class="modal-close cursor-pointer size-5 md:size-6">
          <svg class="size-6 text-[#525252]" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="mb-6">
        <div class="signature-container">
          <VueSignaturePad ref="signaturePad" width="500px" height="300px" class="signature-pad"/>
          <div v-if="showPlaceholder" class="signature-placeholder">
            Gambar tanda tangan di sini
          </div>
          <button @click="clear">Hapus</button>
        </div>
        <!-- <div
          class="bg-[#F8F8F8] text-[#989898] border border-[#EDEDED] h-[220px] flex items-center justify-center rounded-lg">
          Gambar tanda tangan di sini
        </div> -->
        <div
          class="mt-3 bg-[#F8F8F8] border border-[#EDEDED] h-[220px] pt-5 md:pt-0 flex items-start md:items-center justify-center rounded-lg relative">
          <img class="size-full max-h-[150px] md:max-h-[180px] object-contain" src="@/assets/img/signage.svg"
            alt="Signage" />
          <button class="absolute bottom-6 right-6 text-sm font-semibold text-[#CA0A0A]">
            Hapus
          </button>
        </div>
      </div>
      <div class="flex items-stretch md:items-center justify-end flex-col md:flex-row gap-3">
        <button
          class="order-2 md:order-1 modal-close cursor-pointer rounded py-3 px-6 bg-white border border-[#B2B2B2] font-semibold text-[#080808]">
          Batal
        </button>
        <button class="order-1 md:order-2 cursor-pointer rounded py-3 px-6 bg-[#EDEDED] font-semibold text-[#B2B2B2]">
          Buat Tanda Tangan
        </button>
      </div>
    </div>
  </div>

  <!-- FOOTER -->
  <footer class="w-full border-t border-[#EDEDED] pt-4 pb-5 md:py-6">
    <div class="flex flex-col md:flex-row gap-4 items-center justify-between mx-auto max-w-7xl px-4 lg:px-16">
      <div class="flex items-center gap-2">
        <img class="size-9 object-contain" src="@/assets/img/logo.svg" alt="ButterPOS logo" />
        <div class="text-sm text-[#525252]">©2024 Butter POS. All rights reserved</div>
      </div>
      <div class="flex items-center gap-6">
        <a href="#"><img class="size-5" src="@/assets/img/fb.svg" alt="Facebook icon" /></a>
        <a href="#"><img class="size-5" src="@/assets/img/ig.svg" alt="Instagram icon" /></a>
        <a href="#"><img class="size-5" src="@/assets/img/x.svg" alt="X icon" /></a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue'
import { t } from '@/locales'
import LanguageSelector from '@/components/LanguageSelector.vue'
import VueSignaturePad from 'vue-signature-pad'
import { useSignatureStore } from '@/stores/signatureStore'


const signatureStore = useSignatureStore()


// Daftar "step" yang akan ditampilkan
const steps = [
  'pendahuluan',
  'pasal_1',
  'pasal_2',
  'pasal_3',
  'pasal_4',
  'pasal_5',
  'pasal_6',
  'pasal_7',
  'form_persetujuan',
]

// Label untuk tab (harus urutannya sama dengan array steps)
const tabLabels = [
  'Pendahuluan',
  'Pasal 1',
  'Pasal 2',
  'Pasal 3',
  'Pasal 4',
  'Pasal 5',
  'Pasal 6',
  'Pasal 7',
  'Form Persetujuan',
]

// Index step saat ini
const currentIndex = ref(0)
const currentStep = computed(() => steps[currentIndex.value])

function goToStep(index) {
  currentIndex.value = index
}

function nextStep() {
  if (currentIndex.value < steps.length - 1) {
    currentIndex.value++
  }
}

function prevStep() {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

// Ref untuk komponen VueSignaturePad dan boolean untuk placeholder
const signaturePad = ref(null)
const showPlaceholder = ref(true)

// Hilangkan placeholder saat pengguna mulai menggambar
function hidePlaceholder() {
  showPlaceholder.value = false
}

// Bersihkan canvas tanda tangan dan reset placeholder
function clear() {
  signaturePad.value.clearSignature()
  showPlaceholder.value = true
  signatureStore.clearSignature()
}

// Simpan data tanda tangan ke store Pinia
function saveSignature() {
  const data = signaturePad.value.saveSignature()
  signatureStore.setSignature(data)
  // Opsional: tambahkan logika untuk menutup modal setelah menyimpan
}
</script>
<style scoped>
.signature-container {
  position: relative;
}
.signature-placeholder {
  pointer-events: none;
  font-size: 16px;
  color: gray;
}
</style>