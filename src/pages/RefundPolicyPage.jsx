import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './RefundPolicyPage.css'

function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <section className="refund-hero">
        <div className="refund-hero-content">
          <h1>Cancellation, Returns and Refund Policy</h1>
          <nav className="refund-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="refund-breadcrumb-home">Home</Link>
            <span className="refund-breadcrumb-sep">/</span>
            <span className="refund-breadcrumb-current">Refund Policy</span>
          </nav>
        </div>
      </section>

      <article className="refund-content">
        <div className="refund-container">
          <section className="refund-section">
            <h2 className="refund-section-title">A. Cancellation Policy</h2>

            <h3 className="refund-subtitle">1. How can I cancel an order?</h3>

            <h4 className="refund-point">1.1 Medicines and Healthcare Products</h4>
            <p>
              An order for medicines or healthcare products can be cancelled from the Order Details on our website/WhatsApp or by calling our customer care number <a href="tel:+919798133879" className="refund-link">9798133879</a> before it is marked as “Out for Delivery”. Else, you can refuse it at the time of delivery and a refund will be processed as per the Refund Policy.
            </p>

            <h4 className="refund-point">1.2 Diagnostics / Lab Test</h4>
            <p>
              A diagnostic/ lab test can be cancelled anytime unless it is marked ‘Sample Collected’ by the third-party phlebotomist. Else, you can refuse sample pick up at the collection location and a refund will be processed as per the Refund Policy.
            </p>
          </section>

          <section className="refund-section">
            <h2 className="refund-section-title">B. Return Policy</h2>

            <h3 className="refund-subtitle">1. What is the time period for return of orders?</h3>

            <h4 className="refund-point">1.1 Medicine Orders</h4>
            <p>
              We have product specific return policy. The return window ranges from 0–7 days from the date of delivery. The information regarding the return policy can be found on the product page. Please check the return policy before placing any order.
            </p>

            <h4 className="refund-point">1.2 Healthcare Products</h4>
            <p>
              All healthcare products have specific return and replacement policy. The return/replacement window ranges from 0–10 days from the date of delivery. The information regarding the return policy can be found on the product page. Please check the return policy before placing any order.
            </p>
            <p className="refund-note">
              <strong>Note:</strong> Currently, we are not charging any shipping charges for returns from you.
            </p>

            <h3 className="refund-subtitle">2. Which Products are not eligible for Returns?</h3>

            <h4 className="refund-point">2.1 Products Not Eligible for Return</h4>
            <p>
              As per terms offered by all the sellers on our platform, the products shall not be eligible for a return under the following circumstances:
            </p>
            <ul className="refund-list">
              <li>If the item has been opened, partially used or disfigured. The user is strongly advised to check the package carefully at the time of acceptance of products from the delivery agent;</li>
              <li>If the product has been tampered with;</li>
              <li>If the product packaging and/or packaging box and/or packaging seal has been tampered with. The user is strongly advised to check the package carefully at the time of acceptance and should not accept the order if the package appears to be tampered;</li>
              <li>If it is mentioned on the product detail page that the product is non-returnable;</li>
              <li>Any accessories/freebies supplied with the product are missing;</li>
              <li>If the product does not have serial number / UPC number / barcode affixed, which was present at the time of acceptance;</li>
              <li>Any damage/defect which is not covered under the manufacturer&apos;s warranty;</li>
              <li>The product is without original packing and accessories/freebies;</li>
              <li>If the product is damaged due to misuse;</li>
              <li>Products related to personal care, baby care, food & nutrition, healthcare devices, covid essential products (e.g. masks and gloves), sexual wellness products (e.g. condoms), pregnancy/fertility kits, diapers, health drinks, health supplements, glucometers, glucometer strips/lancets, health monitors, etc. We do not take return of certain items such as sexual wellness products, diapers, etc. However, we shall accept return if the aforementioned products are defective, deficient or spurious or not of the characteristics or features as advertised or if they are delivered late.</li>
            </ul>

            <h3 className="refund-subtitle">3. Additional Note</h3>
            <p>
              <strong>3.1</strong> Items marked as &quot;Non-Returnable&quot; on the product detail page or items whose return window has expired cannot be returned. If such an item is indeed returned along with another returnable item, Dulari will disallow a refund or return of the “Non-Returnable” product when our partner licensed retail pharmacy verifies the returned item(s).
            </p>

            <h3 className="refund-subtitle">4. How to Return?</h3>

            <h4 className="refund-point">4.1</h4>
            <p>
              You can raise a return request within the time frame mentioned above by following these simple steps:
            </p>
            <ul className="refund-list">
              <li>Go to My Orders;</li>
              <li>Select the respective order and click on ‘RETURN’;</li>
              <li>Check to see if the product/s that you wish to return are returnable and have an active return window;</li>
              <li>Select the item you wish to return with quantity and reason for return.</li>
            </ul>

            <h4 className="refund-point">4.2</h4>
            <p>
              You can also place a request for return of any product by calling the customer support at <a href="tel:+919798133879" className="refund-link">9798133879</a>.
            </p>

            <h4 className="refund-point">4.3</h4>
            <p>
              After your return request is processed, we will pick up the return items as per the following timelines:
            </p>
            <ul className="refund-list">
              <li><strong>For Local Cities*:</strong> Within 24–48 hours from the time of approval of return request.</li>
              <li><strong>For Other Cities:</strong> Between 4–5 business days from the time of approval of return request. Please note that this time period may be longer depending on the third-party courier partners&apos; terms.</li>
            </ul>

            <h4 className="refund-point">4.4</h4>
            <p>
              Please keep the return package ready in its original packaging with all the labels intact. You are also requested to keep a copy of the invoice/ bill from the seller handy for verification.
            </p>
          </section>

          <section className="refund-section">
            <h2 className="refund-section-title">C. Refund Policy</h2>

            <h3 className="refund-subtitle">1. When can I expect the amount to be refunded?</h3>

            <h4 className="refund-point">1.1</h4>
            <p>
              Please note that the refund amount mentioned at the time of return is an estimate and will be finalised after completion of verification. Once the pick-up is completed and the product is verified by the seller, a refund of the total amount paid for the products returned by you will be initiated for eligible returns as mentioned above.
            </p>

            <h4 className="refund-point">1.2</h4>
            <p>
              Refund will be initiated only post successful verification of the products by the seller. Please note that the verification process may take:
            </p>
            <ul className="refund-list">
              <li><strong>For Local Cities*:</strong> 48 hours from the time of pick up from your location.</li>
              <li><strong>For Other Cities:</strong> 8–10 business days from the date of pick up from your location.</li>
            </ul>
          </section>
        </div>
      </article>

      <Footer />
    </div>
  )
}

export default RefundPolicyPage
