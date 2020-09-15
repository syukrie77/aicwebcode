import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="Tentang Areta Informatics College" keywords={[`teknik informatika`, `sistem informasi`, `digital marketing`, `jago IT`,`jago mikrotik`,`jago linux`,`jago jualan`,`digital marketing`,`jago bisnis`,`internet marketing`,`jago cisco`,`jago networking`,`kampus hacker indonesia`,`hacking`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Areta Informatics College (AIC) adalah lembaga pendidikan profesi dengan metode
            pembelajaran 90% praktek 10% teori.
          </h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
          <h3 id="dynamic-styles">Apa itu metode 90% praktek 10% teori?</h3>
          <p>
            Suatu metode yang diterapkan untuk pembelajaran dengan 90% praktek langsung sehingga 
            skill yang dicapai dapat lebih cepat dengan demikian kompetensi yang di peroleh
	    peserta didik semakin meningkat.
          </p>
          <p>
            10% teori sebagai penunjang untuk praktek dengan studi kasus-studi kasus
            yang real terjadi di lapangan.
          </p>
	  <h2 id="handling-level-2">Keunggulan AIC</h2>
	  <ul>
	    <li>Kurikulum pendidikan yang selalu up-to-date mengikuti perkembangan teknologi terkini.
	    </li>
	    <li>Mendapatkan materi Softskill yakni Character Building, Leadership, Entrepreneurship, dan Public Speaking.
	    </li>
	    <li>Mendapatkan Skill IT Profesional.
	    </li>
	    <li>Mendapatkan Sertifikat Internasional di bidang IT.
	    </li>
	    <li>Dibantu dalam penempatan Magang/Kerja di perusahaan yang bekerja sama dengan AIC.
	    </li>
	    <li>Konsep belajar yang tepat dengan Metode 90% Praktek dan 10% Teori.
	    </li>
	    <li>Memiliki Dosen/Pengajar Praktisi sesuai dengan bidang keahliannya, bersertifikat internasional dan berpengalaman.
	    </li>
	    <li>Waktu kuliah lebih fleksible bagi mahasiswa yang sudah bekerja.
	    </li>
	    <li>Mendapatkan kesempatan untuk mengulang matakuliah yang belum anda pahami secara GRATIS.
	    </li>
	    <li>Mendapatkan pendampingan BISNIS Coaching secara GRATIS untuk membangun bisnis anda sendiri.
	    </li>
	  </ul>
	  <h2 id="handling-level-2">15 Alasan Kenapa Harus Kuliah di Areta Informatics College?</h2>
	  <ul>
   	  <li>Anda ingin mendapatkan gelar Sarjana IT dan Kompetensi Sertifikasi Internasional? Kuliah aja di Areta Informatics College.
	  </li>
	  <li>Anda ingin punya skill sekaligus Sarjana, tidak hanya gelar Sarjana Sastra IT tapi menjadi Praktisi IT? Kuliah aja di Areta Informatics College.
	  </li>
	  <li>Anda ingin punya skill sekaligus kompeten di bidang IT dan Bisnis, diajarkan langsung oleh Praktisi IT dan Praktisi Bisnis? Kuliah aja di Areta Informatics College ingin punya skill sekaligus kompeten di bidang IT dan Bisnis, diajarkan langsung oleh Praktisi IT dan Praktisi Bisnis? Kuliah aja di Areta Informatics College. 
	  </li>
	  <li>Anda ingin mendapatkan pekerjaan sesuai dengan bidang keahlian Anda yakni IT? Kuliah aja di Areta Informatics College.
	  </li>
	  <li>Anda ingin bekerja yang mana pekerjaan anda itu adalah hobi anda? Kuliah aja di Areta Informatics College.
	  </li>
	  <li>Anda ingin cepat kerja dengan biaya kuliah terjangkau? Kuliah aja di Areta Informatics College.
	  </li>
	  <li>Anda ingin punya bisnis sebagai mesin pencetak uang dari dunia digital dan IT? Kuliah aja di Areta Informatics College.
	  </li>
	  <li>Anda dapat membangun usaha yang profitable sehingga usaha tersebut dapat dinikmati oleh anda dan keluarga anda? Kuliah aja di Areta Informatics College.
	  </li>
	  <li>Anda ingin jago di bidang Networking melebihi kemampuan teman-teman anda? Kuliah aja di Areta Informatics College.
	  </li>
	  <li>Anda ingin memiliki keahlian di bidang Programming sehingga mempunyai peluang untuk mendapatkan penghasilan yang besar? Kuliah aja di Areta Informatics College.
	  </li>
	  <li>Anda ingin belajar dengan metode pembelajaran 90% praktek dan 10% teori? Kuliah aja di Areta Informatics College.
	  </li>
	  <li>Anda ingin mendapatkan Softskill Leadership, Character Building, Entrepreneurship dan Public Speaking? Kuliah aja di Areta Informatics College.
	  </li>
	  <li>Anda ingin mendapatkan Skill dan Kompetensi yang langsung dibimbing oleh praktisi bukan hanya akademisi? Kuliah aja di Areta Informatics College.
	  </li>
	  <li>Anda ingin merasakan lingkungan pergaulan yang aman, nyaman, asyik dan merasakan kekeluargaan dengan teman-teman lainnya? Kuliah aja di Areta Informatics College.
	  </li>
	  <li>Anda ingin merasakan pertumbuhan pola pikir yang membuat kapasitas diri anda semakin besar? Kuliah di Areta Informatics College.
	  </li>
	  </ul>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
