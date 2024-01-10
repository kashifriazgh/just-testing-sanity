// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
// import blockContent from './blockContent'
import post from './post';
import author from './author';
import categories from './categories';
import postType from './post-type';
import section2 from './section2';
import section3 from './section3';
import section4 from './section4';
import section5 from './section5';
import section6 from './section6';
import section7 from './section7';
import section8 from './section8';
import section9 from './section9';
import section10 from './section10';
import subscribers from './subscribers';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    post,
    author,
    categories,
    postType,
    section2,
    section3,
    section4,
    section5,
    section6,
    section7,
    section8,
    section9,
    section10,
    subscribers,
  ]),
});
