import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { Button, SelectControl } from '@wordpress/components';

const SearchForm = ({ onSubmit }) => {
  const [status, setStatus] = useState('');
  const [launchYear, setLaunchYear] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ status, launchYear, type });
  };

  return (
    <form onSubmit={handleSubmit}>
      <SelectControl
        label={__('Status', 'spacex')}
        value={status}
        options={[
          { label: __('All', 'spacex'), value: '' },
          { label: __('Active', 'spacex'), value: 'active' },
          { label: __('Inactive', 'spacex'), value: 'inactive' },
        ]}
        onChange={setStatus}
      />
      <SelectControl
        label={__('Launch Year', 'spacex')}
        value={launchYear}
        options={[
          { label: __('All', 'spacex'), value: '' },
          { label: __('2006', 'spacex'), value: '2006' },
          { label: __('2007', 'spacex'), value: '2007' },
          { label: __('2008', 'spacex'), value: '2008' },
          { label: __('2009', 'spacex'), value: '2009' },
          { label: __('2010', 'spacex'), value: '2010' },
          { label: __('2011', 'spacex'), value: '2011' },
          { label: __('2012', 'spacex'), value: '2012' },
          { label: __('2013', 'spacex'), value: '2013' },
          { label: __('2014', 'spacex'), value: '2014' },
          { label: __('2015', 'spacex'), value: '2015' },
          { label: __('2016', 'spacex'), value: '2016' },
          { label: __('2017', 'spacex'), value: '2017' },
          { label: __('2018', 'spacex'), value: '2018' },
          { label: __('2019', 'spacex'), value: '2019' },
          { label: __('2020', 'spacex'), value: '2020' },
          { label: __('2021', 'spacex'), value: '2021' },
        ]}
        onChange={setLaunchYear}
      />
      <SelectControl
        label={__('Type', 'spacex')}
        value={type}
        options={[
          { label: __('All', 'spacex'), value: '' },
          { label: __('Dragon 1.0', 'spacex'), value: 'dragon1' },
          { label: __('Dragon 2.0', 'spacex'), value: 'dragon2' },
        ]}
        onChange={setType}
      />
      <Button isPrimary type="submit">
        {__('Search', 'spacex')}
      </Button>
    </form>
  );
};

export default SearchForm;
