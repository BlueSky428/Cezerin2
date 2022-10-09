import { sanitize } from "dompurify"
import parse from "html-react-parser"
import PropTypes from "prop-types"
import React, { Fragment } from "react"
import MetaTags from "../components/metaTags"
import PageList from "../components/pageList"
import { themeSettings } from "../lib/settings"

const PageContainer = props => {
  const {
    state: { pageDetails },
  } = props
  const pageListTag = themeSettings.page_list_tag
  const pageListTagDefined = pageListTag && pageListTag.length > 0
  const pageListPath = pageListTagDefined ? `/${pageListTag}` : null
  const showPageList = pageListTagDefined && pageDetails.path === pageListPath

  return (
    <Fragment>
      <MetaTags
        title={pageDetails.meta_title}
        description={pageDetails.meta_description}
        canonicalUrl={pageDetails.url}
        ogType="article"
        ogTitle={pageDetails.meta_title}
        ogDescription={pageDetails.meta_description}
      />

      <section className="section">
        <div className="container">
          <div className="content">
            <div className="page-content">
              {parse(sanitize(pageDetails.content))}
            </div>
            {showPageList && (
              <PageList tags={pageListTag} sort="-date_created" />
            )}
          </div>
        </div>
      </section>
    </Fragment>
  )
}

PageContainer.propTypes = {
  state: PropTypes.shape({
    pageDetails: PropTypes.shape({}),
  }).isRequired,
}

export default PageContainer
