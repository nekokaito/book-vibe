
const Contact = () => {
    return (
        <div>
            <div className="hero rounded-3xl my-10 min-h-screen bg-base-200 " style={{backgroundImage: 'url(https://images.unsplash.com/photo-1488998427799-e3362cec87c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Contact Us</h1>
      <p className="py-6">We understand that sometimes you might have questions, concerns, or simply want to connect with us. That's why we encourage you to reach out to our dedicated team through the various channels we provide.</p>
    </div>
    <div className="card shrink-0 w-full  max-w-sm shadow-2xl bg-base-100 ">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="full name" className="input input-bordered" required />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input type="text" placeholder="+880" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Send</button>
        </div>
      </form>
    </div>
  </div>
</div>

<div className="collapse mt-10 mb-2 collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" defaultChecked /> 
  <div className="collapse-title text-xl font-medium">
  1. How do I place an order?
  </div>
  <div className="collapse-content"> 
    <p>Placing an order with BookHub is easy! Simply browse our website, add the desired items to your cart, and proceed to checkout. Follow the prompts to enter your shipping and payment information, and you're all set. If you encounter any difficulties, our customer support team is here to assist you.</p>
  </div>
</div>
<div className="collapse mb-2 collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  2. What payment methods do you accept?
  </div>
  <div className="collapse-content"> 
    <p>We accept various payment methods, including major credit cards (Visa, MasterCard, American Express), PayPal, and other secure payment gateways. Rest assured that your payment information is encrypted and secure.</p>
  </div>
</div>
<div className="collapse mb-10 collapse-plus bg-base-200" >
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
 3. How can I track my order?
  </div>
  <div className="collapse-content"> 
    <p>Once your order has been processed and shipped, you will receive a confirmation email with tracking information. You can use this information to track the status of your delivery through our website or the carrier's website.</p>
  </div>
</div>


        </div>
    );
};

export default Contact;