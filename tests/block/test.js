/**
 * External dependencies
 */
import '@testing-library/jest-dom/extend-expect';

/**
 * Internal dependencies
 */
import { render, screen } from '@testing-library/react';
import SearchForm from '../src/components/SearchForm';

describe( 'SearchForm', () => {
	it( 'should render the form', () => {
		render( <SearchForm /> );

		const form = screen.getByRole( 'form' );

		expect( form ).toBeInTheDocument();
	} );
} );
