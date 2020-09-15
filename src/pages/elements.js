import React from "react"
import { graphql, StaticQuery } from "gatsby"
//import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ElementsPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Kuliah cepat tepat cepat dapat kerja dan bisnis"
        keywords={[`kuliah IT`, `kuliah informatika`, `kuliah cepat kerja`, `kampus berkualitas`,`kampus IT tangerang`,`kuliah langsung kerja`,`lulus kuliah`,`langsung kerja! standar`,`belum lulus kuliah`,`langsung kerja! biasa`,`belum kuliah`,`dapat penghasilan`,`ini baru luar bisa! kamu mau?`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <p>
            Areta Informatics College memiliki tiga program studi yakni{" "}
            <strong>
              <strong>Profesi Teknik Informatika</strong>
            </strong>{" "}
            dan {" "} 
	    <strong>
              <strong>Profesi Sistem Informasi</strong>
            </strong>. 

	    <strong>Profesi Teknik Informatika</strong>{" "}
            <em>
              <em>fokus</em>
            </em>{" "}
            dengan konsentrasi {" "}
            <em>
              <em><strong>dibidang Infrastruktur, Networking dan Sistem Server.</strong></em>
            </em>
	    
	    <strong> Sistem Informasi</strong>{" "}
	    <em>
	      <em>fokus</em>
	    </em>{" "}
	    dengan konsentrasi {" "}
	    <em>
	      <em><strong>dibidang Web Development, Design, dan Database</strong>.</em>
	    </em>
	  
	    <strong>Digital Marketing</strong>{" "}
	    <em>
	      <em>fokus</em>
	    </em>{" "}
	    dengan konsentrasi {" "}
	    <em>
	      <em><strong>Teknik Marketing dengan menggunakan digital atau internet</strong>.</em>
	    </em>
          </p>
          <h2 id="heading-level-2">Teknik Informatika</h2>
	  <p>Belajar dan mempraktekkan membangun infrastruktur jaringan dengan Perangkat Mikrotik, Perangkat Cisco, Membangun Server Linux 
	  dan Mengelola System Server. Baik pada jaringan lokal seperti LAN, WAN, dan Internet.</p>
	  <p>Belajar dan mempraktekkan membangun Sistem Server untuk kebutuhan spesifik seperti Cloud Server, VPN Server, DNS Server, Mail Server, dan Server-server lainnya.</p>
	  <p>Belajar dan mempraktekkan membuat <em>Sistem Security</em> yang aman untuk kebutuhan di infrastruktur baik kebutuhan <strong>SOHO (Small Office Home Office)</strong> 
	  maupun kelas <strong>Enterprise</strong>.</p>

	  <h2 id="heading-level-2">Sistem Informasi</h2>
	  <p>Belajar dan mempraktekkan membangun web aplikasi menggunakan bahasa pemrograman seperti Java, PHP, JAMSTACK, dan bahasa pemrograman lainnya
	  untuk kebutuhan di dunia usaha kelas <strong>UMKM</strong>, maupun kelas <strong>Enterprise</strong>.</p>
	  <p>Belajar dan mempraktekkan membuat design logo, design banner, design web seperti UI/UX untuk kebutuhan dunia usaha dan industri.</p>
	  <p>Mampu dan memahami bagaimana membuat website, landingpage, web marketing untuk kebutuhan digital marketing</p>

	  <h2 id="heading-level-2">Digital Marketing</h2>
	  <p>Anda akan belajar dan berlatih Mindset seorang Digital Marketing, Funneling, CopyWriting, Landingpage, Content Creative, and Video Creative, serta Teknik SEO. Belajar bagaimana beriklan baik berbayar maupun yang gratis seperti Fanspage, IG, FBAds, IGAds dan GoogleAds.</p>
          
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
    smallPic: file(
      relativePath: { eq: "fabio-comparelli-696506-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    medPic: file(relativePath: { eq: "sophia-valkova-30139-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    largePic: file(
      relativePath: { eq: "vladimir-malyutin-98174-unsplash.jpg" }
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
      <ElementsPage location={props.location} data={data} {...props} />
    )}
  />
)
