import React from "react";


function TopicsPage() {
  return (
    <>
      <h2>
        Web Development Concepts
      </h2>
      <nav class="local">
        <a href="#web-servers">Web Servers</a>
        <a href="#frontend-design">Frontend Design</a>
        <a href="#optimizing-images">Optimizing Images</a>
        <a href="#favicons">Favicons</a>
        <a href="#css">CSS</a>
        <a href="#javascript">JavaScript</a>
      </nav>
      <article id="web-servers">
        <h3>Web Servers</h3>
        <p>
          An <strong>index</strong> refers to an “index page” that serves as the
          homepage of the web application. When a user enters a URL into a web
          browser, the web server will look for a file like “index.html” or
          something similar to initially display to the user. Most servers are
          configured to that the request is mapped to the file at the path
          index.html, however, sometimes the server will look for default.html,
          index.js, or index.php as the homepage.
        </p>
        <p>
          The browser's{" "}
          <strong>Web Dev/Inspector Network tab output screen</strong> displays
          network requests made by a web page when it loads in a web browser.
          Each resource will display a status, type, initiator, size, time, and
          waterfall. Additionally, each individual resource will have headers,
          preview, response, initiator, and timing. Files viewed from a web
          server will show resources being loaded from a remote server, whereas
          files viewed from a local computer display resources loaded from the
          local system. The origin and location of these resources will be
          different.
        </p>
        <p>
          The favicon.ico file has a status of <strong>200-OK</strong> because
          the request succeeded, and the response body has the needed
          information. We have not yet created the main.css and main.js files,
          so they will not return a status of 200-OK and will instead return a
          status of <strong>404-Not Found.</strong>
        </p>
        <p>
          In my URL, https://web.engr.oregonstate.edu/~morricas/a1-morricas/,
          the <strong>scheme</strong> is 'HTTPS' which is the secure version of
          HTTP. The <strong>subdomain</strong> is 'web' and 'engr' which is part
          of the larger host <strong>domain</strong>, which is
          'oregonstate.edu,' the website where the resource is located. The{" "}
          <strong>resource path</strong> is '/~morricas/a1-morricas/' which is
          the directory where the content is stored.
        </p>
      </article>
      <article id="frontend-design">
        <h3>Frontend Design</h3>
        <p>
          Frontend Design is the process of creating user interface so that
          users may have the best experience on a website. It involves designing
          the visual elements that users will see and interact with on their
          screen. Visual design impacts how users perceive and interact with a
          website. It involves the use of color to evoke emotion and improve
          readability, fonts for content hierarchy and readability, media to
          display images and videos, icons to server as visual cues, and
          navigation/GUI to demonstrate intuitive menus and responsive design.
          The focus is on making sure that the website is visually appealing and{" "}
          <strong>usable</strong> for the user. The Five "E"s of usability
          encompass a range of factors that may influence how users interact
          with a product, system, or service. A usable website includes...
        </p>
        <dl>
          <dt>
            <strong>Effective</strong>
          </dt>
          <dd>
            Focuses on meeting the user's goals accurately and completely.
          </dd>
          <dt>
            <strong>Efficient</strong>
          </dt>
          <dd>
            How quickly a user can accomplish tasks with the least number of
            steps.
          </dd>
          <dt>
            <strong>Easy to Navigate</strong>
          </dt>
          <dd>
            A website is considered easy to navigate if a user can find their
            information quickly and effortlessly the first time they access the
            site.
          </dd>
          <dt>
            <strong>Error-free</strong>
          </dt>
          <dd>
            Seek to eliminate errors that can lead to accessibility and
            availability issues. This is achieved by understanding common user
            errors and specific roadblocks to their needs.
          </dd>
          <dt>
            <strong>Enjoyable</strong>
          </dt>
          <dd>
            A website should cater to the preferences of its target audience so
            that users will return.
          </dd>
        </dl>
        <p>
          <strong>Page layout tags</strong> break up the flow of content and are
          usually displayed with a newline before and after the element. The{" "}
          <strong>header</strong> element represents the banner or masthead and
          contains introductory information such as name, publisher, logo, and
          slogan. The <strong>nav</strong> element stands for navigation and
          will typically include the main menu, search, tools, stories,
          locations, and legal links. Each link will take the user from the
          current page to another one. The <strong>main</strong> element defines
          the main area of the webpage and includes content such as stories,
          galleries, and tutorials. The <strong>section</strong> element is used
          to group related content and can be thought of as thematic grouping.
          If information in the section be can't put under one heading, it
          should be in an article instead. An <strong>article</strong> element
          is usually placed within a section and represents a single, distinct
          topic with a second-level headline h2. The <strong>aside</strong>{" "}
          element is often used for content related to an article, typically
          positioned to the right or left of the main article with a distinct
          style. It can also be used as a sidebar for navigation or unrelated
          content. The <strong>figure</strong> and <strong>figcaption</strong>{" "}
          elements are similar to aside, but incorporate media such as an image
          or movie with a figcaption to describe it. The figure element encloses
          both the img and figcaption tags. The <strong>blockquote</strong>{" "}
          element is used for extended quotations that are too long to be a
          paragraph. They typically visually stand out from the paragraph, and
          may include a quote (q) tag and citation (cite) tag. The{" "}
          <strong>footer</strong> element can be found below the main content
          and includes legal details, contact information, and links to critical
          pages. The footer should at least contain the copyright symbol, year
          of publication, and the owner's name. The
          <strong>div</strong> element is a placeholder for dynamic content, as
          well as a divider for content when no other existing element makes
          sense. It has no style or dimensions.
        </p>
        <ol>
          <li>
            Anchors link to external content when the full URL is specified as
            the href attribute.
          </li>
          <li>
            Anchors link to internal content when an ID is specified as the href
            attribute.
          </li>
          <li>
            For an anchor to link between pages within the same website, a
            <strong>relative</strong> URL is specified as the href attribute.
          </li>
        </ol>
      </article>
      <article id="optimizing-images">
        <h3>Optimizing Images</h3>
        <p>
          There are 6 major specifications of images for the web. For the best
          Search Engine Optimization (SEO), use
          <strong>descriptive file names</strong> that are concise and
          incorporates specific details about the image. This allows search
          engine bots to categorize the image, making it easier for users
          searching for related content to find it. Utilize{" "}
          <strong>small file sizes</strong> for quick loading. High-resolution
          images should only be displayed as such to devices that require them,
          using attributes like srcset="" and sizes="". Look into image
          compression for smallest image size, but be aware of loss of quality
          with lossy compression. Use <strong>exact dimensions</strong> by
          cropping the image to fit the dimensions of the space on your web
          page. If the image doesn't fit the space correctly, the page will load
          too slowly. Make sure files are in the{" "}
          <strong>appropriate file format</strong>, usually .JPG for
          photographs, .GIF or .png for line art, and 24-bit .PNG for graphics
          with true transparency. Be prepared to offer{" "}
          <strong>lowered resolution</strong> images, as monitors display
          resolutions ranging from 72 to 300+ pixels per inch (ppi), with the
          older standard being 72ppi, so common practice is to offer multiple
          image sizes to accommodate different displays. The suitable{" "}
          <strong>color mode</strong> is RGB for .PNG, .JPG, .SVG, and .WebP
          images, while .GIF images should be in Indexed color mode.
        </p>
        <p>
          The most appropriate file formats for photos are JPG and WebP. They
          compress down to small file sizes and remain rectangular. For line
          art, the most suitable file formats are PNG, SVG, and GIF. PNG
          supports transparency and works well for images with text and simple
          graphics. SVG allows for sharp rendering at any resolution. GIF
          supports 8-bit transparency and/or animation, making it a good choice
          for line art.
        </p>
      </article>
      <article id="favicons">
        <h3>Favicons</h3>
        <p>
          Favicons are small icons that are displayed to the left of the web
          page title in the browser tab. They help users quickly identify and
          switch between open tabs. The most common file formats are .SVG and
          .PNG. Mobile devices can display favicons as the app icon.
        </p>
      </article>
      <article id="css">
        <h3>Cascading Stylesheets</h3>
        <p>
          While HTML organizes and structures content on a webpage, Cascading
          Stylesheets (CSS) change how that content looks and behaves, making it
          consistent, responsive, easy to maintain, and accessible to more
          users. CSS allows developers to maintain{" "}
          <strong>consistent</strong> designs across all pages of a website,
          which is crucial for branding as well as user experience.{" "}
          <strong>Responsive design</strong> allows websites to adapt to various
          screen and phone sizes. Since styles can be centralized, a change made
          in one place can affect all pages, allowing for{" "}
          <strong>easily maintained styles</strong>. CSS can also improve{" "}
          <strong>accessibility</strong> by helping users with disabilities,
          including screen readers, to engage with content they would not
          otherwise be able to.
        </p>
        <p>
          There are 5 ways to incorporate styles. (1) an{" "}
          <strong>external stylesheet</strong> containing CSS rules which
          provides styles to all pages of a website that link to that
          stylesheet. This is typically the most efficient and preferred method
          for an app or websites. If a <strong>one-off style change</strong> {" "}
          is needed, it is possible to embed styles directly in HTML and
          JavaScript files. This includes (2) embedding within a style tag, (3)
          inline with an element using an attribute and value, (4) in JavaScript
          template literals within a JavaScript function, and (5) in regular
          JavaScript by manipulating the Document Object Model (DOM).
        </p>
      </article>
      <article id="javascript">
        <h3>JavaScript</h3>
        <p>
          JavaScript is a programming language that runs in the browser which
          allows dynamic behavior after a page is loaded in the browser. It is
          the language for writing client-side and server-side code for web
          applications. Here are some important concepts about JavaScript:
        </p>
        <p>
          In JavaScript, the main <strong>data types</strong> include: numbers,
          booleans, strings, symbols, undefined, null, and objects.
        </p>
        <p>
          <strong>Objects</strong> in JavaScript allow developers to create
          name-value pairs. <strong>Arrays</strong> are objects that allow
          developers to set property names as strings.{" "}
          <strong>JSON</strong> is used to exchange data between applications,
          via mapping an object in a program to a string in the JSON format, and
          also creating an object in a program from a string in the JSON format.
        </p>
        <p>
          <strong>Conditionals</strong> in JavaScript are used when certain
          conditions need to be met to perform some decision, and can be used
          via if and switch statements, as well as the ternary operator.{" "}
          <strong>Loops</strong> allow web developers to repeatedly perform some
          code until a condition is met. Some examples include while, do while,
          for, for of, and for in.
        </p>
        <p>
          <strong>Object-Oriented Programming</strong> in JavaScript is a
          concept where the focus is placed on the state and behavior of
          objects. When there are many objects with the same properties, it is
          useful to declare common properties to create many objects with those
          common properties. This is achieved through the use of prototypes and
          class constructors.
        </p>
        <p>
          <strong>Functional programming</strong> in JavaScript refers to the
          concept of first-class values, higher-order functions, and closures.
          They are powerful features which are used very frequently in
          JavaScript.
        </p>
      </article>
    </>
  );
}
export default TopicsPage;
