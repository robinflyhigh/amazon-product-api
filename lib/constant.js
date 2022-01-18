const moment = require('moment');

module.exports = {
    limit: {
        product: 1000,
        reviews: 2000,
    },
    defaultItemLimit: 15,
    reviewFilter: {
        sortBy: {
            recent: 'recent',
            helpful: 'helpful',
        },
        filterByStar: {
            positive: 'positive',
            critical: 'critical',
            1: 'one_star',
            2: 'two_star',
            3: 'three_star',
            4: 'four_star',
            5: 'five_star',
        },
        formatType: {
            all_formats: 'all_formats',
            current_format: 'current_format',
        },
    },
    geo: {
        US: {
            country: 'United States of America',
            currency: 'USD',
            symbol: '$',
            host: 'www.amazon.com',
            variants: {
                split_text: 'Click to select ',
            },
            best_seller: (text) => {
                if (text) {
                    const match = text.match(/(#[\d,|]+) in[\s\n ]([\w&'\s]+)/);
                    if (match) {
                        return { rank: parseInt(match[1].replace(/[^\d]/g, '')), category: match[2].trim() };
                    }
                }
                return '';
            },
            review_date: (date) => {
                const dateRegex = /on (.+)$/.exec(date);
                if (dateRegex) {
                    return {
                        date: dateRegex[1],
                        unix: moment(new Date(`${dateRegex[1]} 02:00:00`))
                            .utc()
                            .unix(),
                    };
                }
                return '';
            },
            price_format: (price) => {
                const formatedPrice = price.replace(/[^\d+\.]/g, '');
                return parseFloat(formatedPrice);
            },
            product_information: {
                id: [
                    '#detailBulletsWrapper_feature_div > ul',
                    '#detailBullets_feature_div > ul',
                    '#productDetails_detailBullets_sections1',
                    '#productDetails_techSpec_section_1',
                    '#productDetails_techSpec_section_2',
                    '#productOverview_feature_div div tbody',
                    '.a-container div .a-section form .a-box-inner',
                    //'#detailBulletsWrapper_feature_div > ul:nth-child(5)',
                    //'#detailBulletsWrapper_feature_div #detailBullets_feature_div > ul',

                ],
                fields: {
                    'Amazon Best Sellers Rank': { key: '', rank: true },
                    'Best-sellers rank': { key: '', rank: true },
                    'Best Sellers Rank': { key: '', rank: true },
                    'Package Dimensions': { key: 'dimensions' },
                    'Product Dimensions': { key: 'dimensions' },
                    'Parcel Dimensions': { key: 'dimensions' },
                    'Item Weight': { key: 'weight' },
                    'Manufacturer': { key: 'manufacturer' },
                    'Release date': { key: 'available_from' },
                    'Date First Available': { key: 'available_from' },
                    'Item model number': { key: 'model_number' },
                    'Department': { key: 'department' },
                    'Language': { key: 'language' },
                    'Publisher': { key: 'publisher' },
                    'Reading level': { key: 'reading_level' },
                    'Grade Level': { key: 'grade_level' },
                    'Hardcover': { key: 'hardcover' },
                    'Paperback': { key: 'paperback' },
                    'ISBN-10': { key: 'ISBN-10' },
                    'ISBN-13': { key: 'ISBN-13' },

                    'Best Sellers Rank': { key: 'best_sellers_rank' },

                    /*

                    'Is Discontinued By Manufacturer': { key: 'is_discontinued_by_manufacturer' },
                    'Product Dimensions': { key: 'product_dimensions' },
                    'Item model number': { key: 'item_model_number' },
                    'Date First Available': { key: 'date_first_available' },
                    'Manufacturer': { key: 'manufacturer' },
                    'ASIN': { key: 'asin' },
                    'Brand': { key: 'brand' },
                    'Color': { key: 'color' },
                    'Unit Count': { key: 'unit_count' },
                    'Product Care Instructions': { key: 'product_care_instructions' },
                    'Number of Pieces': { key: 'number_of_pieces' },
                    'Customer Reviews': { key: 'customer_reviews' },
                    'Scent': { key: 'scent' },
                    'Item Form': { key: 'item_form' },
                    'Material Feature': { key: 'material_feature' },
                    'Use for': { key: 'use_for' },
                    'Age Range Description': { key: 'age_range_description' },
                    'UPC': { key: 'upc' },
                    'Skin Type': { key: 'skin_type' },
                    'Product Benefits': { key: 'product_benefits' },
                    'Concentration': { key: 'concentration' },
                    'Dosage Form': { key: 'dosage_form' },
                    'Active Ingredients': { key: 'active_ingredients' },
                    'Specific Uses For Product': { key: 'specific_uses_for_product' },
                    'Manufacturer recommended age': { key: 'manufacturer_recommended_age' },
                    'Mfg Recommended age': { key: 'mfg_recommended_age' },
                    'Material': { key: 'material' },
                    'Item Dimensions LxWxH': { key: 'item_dimensions_lxwxh' },
                    'Flavor': { key: 'flavor' },
                    'Weight': { key: 'weight' },
                    'Specialty': { key: 'specialty' },
                    'Country of Origin': { key: 'country_of_origin' },
                    'Domestic Shipping': { key: 'domestic_shipping' },
                    'International Shipping': { key: 'international_shipping' },
                    'Volume': { key: 'volume' },
                    'Batteries Required?': { key: 'batteries_required?' },
                    'Compatible Material': { key: 'compatible_material' },
                    'Item Volume': { key: 'item_volume' },
                    'Finish Type': { key: 'finish_type' },
                    'Special Feature': { key: 'special_feature' },
                    'Type': { key: 'type' },
                    'Material Type Free': { key: 'material_type_free' },
                    'Liquid Volume': { key: 'liquid_volume' },
                    'Surface Recommendation': { key: 'surface_recommendation' },
                    'Hair Type': { key: 'hair_type' },
                    'Full Cure Time': { key: 'full_cure_time' },
                    'Sun Protection': { key: 'sun_protection' },
                    'Power Source': { key: 'power_source' },
                    'Batteries Required': { key: 'batteries_required' },
                    'Handle Material': { key: 'handle_material' },
                    'Package Information': { key: 'package_information' },
                    'Theme': { key: 'theme' },
                    'Special Ingredients': { key: 'special_ingredients' },
                    'Recommended Uses For Product': { key: 'recommended_uses_for_product' },
                    'Diet Type': { key: 'diet_type' },
                    'Batteries': { key: 'batteries' },
                    'Model Name': { key: 'model_name' },
                    'Number Of Items': { key: 'number_of_items' },
                    'Batteries required': { key: 'batteries_required' },
                    'Allergen Information': { key: 'allergen_information' },
                    'Size': { key: 'size' },
                    'Origin': { key: 'origin' },
                    'Is Dishwasher Safe': { key: 'is_dishwasher_safe' },
                    'Assembly Required': { key: 'assembly_required' },
                    'Warranty Description': { key: 'warranty_description' },
                    'Included Components': { key: 'included_components' },
                    'Compatible Devices': { key: 'compatible_devices' },
                    'Style': { key: 'style' },
                    'Target Species': { key: 'target_species' },
                    'Connectivity technologies': { key: 'connectivity_technologies' },
                    'Special Features': { key: 'special_features' },
                    'Other display features': { key: 'other_display_features' },
                    'Audio Jack': { key: 'audio_jack' },
                    'Colour': { key: 'colour' },
                    'Connectivity Technology': { key: 'connectivity_technology' },
                    'Form Factor': { key: 'form_factor' },
                    'Headphones Jack': { key: 'headphones_jack' },
                    'Blade Material': { key: 'blade_material' },
                    'Target Audience': { key: 'target_audience' },
                    'Coverage': { key: 'coverage' },
                    'Skin Tone': { key: 'skin_tone' },
                    'Part Number': { key: 'part_number' },
                    'Finish': { key: 'finish' },
                    'Item Package Quantity': { key: 'item_package_quantity' },
                    'Grit Description': { key: 'grit_description' },
                    'Batteries Included': { key: 'batteries_included' },
                    'Grit Type': { key: 'grit_type' },
                    'Country_Region Of Origin': { key: 'country_region_of_origin' },
                    'Number of Sets': { key: 'number_of_sets' },
                    'Material Type': { key: 'material_type' },
                    'Number of Items': { key: 'number_of_items' },
                    'Point Type': { key: 'point_type' },
                    'Ink Color': { key: 'ink_color' },
                    'Manufacturer Part Number': { key: 'manufacturer_part_number' },
                    'Cartoon Character': { key: 'cartoon_character' },
                    'Toy figure type': { key: 'toy_figure_type' },
                    'Number of Drawers': { key: 'number_of_drawers' },
                    'Standing screen display size': { key: 'standing_screen_display_size' },
                    'Item DimensionsLxWxH': { key: 'item_dimensionslxwxh' },
                    'Our Recommended age': { key: 'our_recommended_age' },
                    'Import Designation': { key: 'import_designation' },
                    'Floor Area': { key: 'floor_area' },
                    'Sheet Count': { key: 'sheet_count' },
                    'Number of Resistance Levels': { key: 'number_of_resistance_levels' },
                    'Sport Type': { key: 'sport_type' },
                    'Safety warning': { key: 'safety_warning' },
                    'Target gender': { key: 'target_gender' },
                    'Material free': { key: 'material_free' },
                    'Care instructions': { key: 'care_instructions' },
                    'Dishwasher safe': { key: 'dishwasher_safe' },
                    'Is portable': { key: 'is_portable' },
                    'Country_Region of origin': { key: 'country_region_of_origin' },
                    'Plant or Animal Product Type': { key: 'plant_or_animal_product_type' },
                    'Sunlight Exposure': { key: 'sunlight_exposure' },
                    'Additional product features': { key: 'additional_product_features' },
                    'Finish Types': { key: 'finish_types' },
                    'Paint Type': { key: 'paint_type' },
                    'Water Resistance Level': { key: 'water_resistance_level' },
                    'Number of Batteries': { key: 'number_of_batteries' },
                    'Genre': { key: 'genre' },
                    'Package Type': { key: 'package_type' },
                    'Primary Supplement Type': { key: 'primary_supplement_type' },
                    'Maximum weight recommendation': { key: 'maximum_weight_recommendation' },
                    'Shape': { key: 'shape' },
                    'Fabric Type': { key: 'fabric_type' },
                    'Mounting Type': { key: 'mounting_type' },
                    'Number of Compartments': { key: 'number_of_compartments' },
                    'Pattern': { key: 'pattern' },
                    'Care Instructions': { key: 'care_instructions' },
                    'Closure Type': { key: 'closure_type' },
                    'Installation Type': { key: 'installation_type' },
                    'Closure': { key: 'closure' },
                    'Occasion': { key: 'occasion' },
                    'Capacity': { key: 'capacity' },
                    'Number Of Pieces': { key: 'number_of_pieces' },
                    'Tip Type': { key: 'tip_type' },
                    'Formulation Type': { key: 'formulation_type' },
                    'Weight Limit': { key: 'weight_limit' },
                    'Item Thickness': { key: 'item_thickness' },
                    'Sub Brand': { key: 'sub_brand' },
                    'Grip Type': { key: 'grip_type' },
                    'Sport': { key: 'sport' },
                    'Item Diameter': { key: 'item_diameter' },
                    'Brand Name': { key: 'brand_name' },
                    'Color Name': { key: 'color_name' },
                    'Movement Type': { key: 'movement_type' },
                    'TV Size': { key: 'tv_size' },
                    'Minimum Compatible Size': { key: 'minimum_compatible_size' },
                    'Maximum Tilt Angle': { key: 'maximum_tilt_angle' },
                    'Fill material Type': { key: 'fill_material_type' },
                    'Material Care Instructions': { key: 'material_care_instructions' },
                    'Fill Material': { key: 'fill_material' },
                    'Head Type': { key: 'head_type' },
                    'Insole Type': { key: 'insole_type' },
                    'Item Display Dimensions': { key: 'item_display_dimensions' },
                    'Collection Name': { key: 'collection_name' },
                    'Year': { key: 'year' },
                    'Educational Objective': { key: 'educational_objective' },
                    'Frame Material': { key: 'frame_material' },
                    'Backing': { key: 'backing' },
                    'Hardware Interface': { key: 'hardware_interface' },
                    'Microphone Form Factor': { key: 'microphone_form_factor' },
                    'Bottle nipple type': { key: 'bottle_nipple_type' },
                    'Reusability': { key: 'reusability' },
                    'Bottle type': { key: 'bottle_type' },
                    'Toy vehicle form': { key: 'toy_vehicle_form' },
                    'Best uses': { key: 'best_uses' },
                    'Wheel Type': { key: 'wheel_type' },
                    'Wheel Size': { key: 'wheel_size' },
                    'Wireless Type': { key: 'wireless_type' },
                    'Series': { key: 'series' },
                    'Control Method': { key: 'control_method' },
                    'Frequency Band Class': { key: 'frequency_band_class' },
                    'Security Protocol': { key: 'security_protocol' },
                    'Number of Ports': { key: 'number_of_ports' },
                    'Controller Type': { key: 'controller_type' },
                    'Usage': { key: 'usage' },
                    'CPSIA Cautionary Statement': { key: 'cpsia_cautionary_statement' },
                    'Specification Met': { key: 'specification_met' },
                    'Orientation': { key: 'orientation' },
                    'Purification Method': { key: 'purification_method' },
                    'Operation Mode': { key: 'operation_mode' },
                    'Connector Type': { key: 'connector_type' },
                    'Polar Pattern': { key: 'polar_pattern' },
                    'Hardware Platform': { key: 'hardware_platform' },
                    'Number of Channels': { key: 'number_of_channels' },
                    */


                },
            },
        },
        AU: {
            country: 'Australia',
            currency: 'AUD',
            symbol: '$',
            host: 'www.amazon.com.au',
            variants: {
                split_text: 'Click to select ',
            },
            best_seller: (text) => {
                if (text) {
                    const match = text.match(/(#[\d,|]+) in[\s\n ]([\w&'\s]+)/);
                    if (match) {
                        return { rank: parseInt(match[1].replace(/[^\d]/g, '')), category: match[2].trim() };
                    }
                }
                return '';
            },
            review_date: (date) => {
                const dateRegex = /on (.+)$/.exec(date);
                if (dateRegex) {
                    return {
                        date: dateRegex[1],
                        unix: moment(new Date(`${dateRegex[1]} 02:00:00`))
                            .utc()
                            .unix(),
                    };
                }
                return '';
            },
            price_format: (price) => {
                const formatedPrice = price.replace(/[^\d+\.]/g, '');
                return parseFloat(formatedPrice);
            },
            product_information: {
                id: [
                    '#detailBullets_feature_div > ul',
                    '#productDetails_detailBullets_sections1',
                    '#productDetails_techSpec_section_1',
                    '#productDetails_techSpec_section_2',
                    '#detailBulletsWrapper_feature_div > ul:nth-child(5)',
                ],
                fields: {
                    'Amazon Best Sellers Rank': { key: '', rank: true },
                    'Best-sellers rank': { key: '', rank: true },
                    'Best Sellers Rank': { key: '', rank: true },
                    'Package Dimensions': { key: 'dimensions' },
                    'Product Dimensions': { key: 'dimensions' },
                    'Parcel Dimensions': { key: 'dimensions' },
                    'Item Weight': { key: 'weight' },
                    Manufacturer: { key: 'manufacturer' },
                    'Release date': { key: 'available_from' },
                    'Date First Available': { key: 'available_from' },
                    'Item model number': { key: 'model_number' },
                    Department: { key: 'department' },
                },
            },
        },
        BR: {
            country: 'Brazil',
            currency: 'BRL',
            symbol: 'R$',
            host: 'www.amazon.com.br',
            variants: {
                split_text: 'Click to select ',
            },
            best_seller: (text) => {
                if (text) {
                    const match = text.match(/(#[\d,|]+) in[\s\n ]([\w&'\s]+)/);
                    if (match) {
                        return { rank: parseInt(match[1].replace(/[^\d]/g, '')), category: match[2].trim() };
                    }
                }
                return '';
            },
            review_date: (date) => {
                const dateRegex = /on (.+)$/.exec(date);
                if (dateRegex) {
                    return {
                        date: dateRegex[1],
                        unix: moment(new Date(`${dateRegex[1]} 02:00:00`))
                            .utc()
                            .unix(),
                    };
                }
                return '';
            },
            price_format: (price) => {
                const formatedPrice = price.replace(/[^\d+\,]/g, '');
                return parseFloat(formatedPrice.replace(/,/g, '.'));
            },
            product_information: {
                // <<------ NOT CORRECT! Requires translation of the {fields} key values. I don't have much time to do it
                id: [
                    '#detailBullets_feature_div > ul',
                    '#productDetails_detailBullets_sections1',
                    '#productDetails_techSpec_section_1',
                    '#productDetails_techSpec_section_2',
                    '#detailBulletsWrapper_feature_div > ul:nth-child(5)',
                ],
                fields: {
                    'Amazon Best Sellers Rank': { key: '', rank: true },
                    'Best-sellers rank': { key: '', rank: true },
                    'Best Sellers Rank': { key: '', rank: true },
                    'Package Dimensions': { key: 'dimensions' },
                    'Product Dimensions': { key: 'dimensions' },
                    'Parcel Dimensions': { key: 'dimensions' },
                    'Item Weight': { key: 'weight' },
                    Manufacturer: { key: 'manufacturer' },
                    'Release date': { key: 'available_from' },
                    'Date First Available': { key: 'available_from' },
                    'Item model number': { key: 'model_number' },
                    Department: { key: 'department' },
                },
            },
        },
        CA: {
            country: 'Canada',
            currency: 'CAD',
            symbol: '$',
            host: 'www.amazon.ca',
            variants: {
                split_text: 'Click to select ',
            },
            best_seller: (text) => {
                if (text) {
                    const match = text.match(/(#[\d,|]+) in[\s\n ]([\w&'\s]+)/);
                    if (match) {
                        return { rank: parseInt(match[1].replace(/[^\d]/g, '')), category: match[2].trim() };
                    }
                }
                return '';
            },
            review_date: (date) => {
                const dateRegex = /on (.+)$/.exec(date);
                if (dateRegex) {
                    return {
                        date: dateRegex[1],
                        unix: moment(new Date(`${dateRegex[1]} 02:00:00`))
                            .utc()
                            .unix(),
                    };
                }
                return '';
            },
            price_format: (price) => {
                const formatedPrice = price.replace(/[^\d+\.]/g, '');
                return parseFloat(formatedPrice);
            },
            product_information: {
                id: [
                    '#detailBullets_feature_div > ul',
                    '#productDetails_detailBullets_sections1',
                    '#productDetails_techSpec_section_1',
                    '#productDetails_techSpec_section_2',
                    '#detailBulletsWrapper_feature_div > ul:nth-child(5)',
                ],
                fields: {
                    'Amazon Best Sellers Rank': { key: '', rank: true },
                    'Best-sellers rank': { key: '', rank: true },
                    'Best Sellers Rank': { key: '', rank: true },
                    'Package Dimensions': { key: 'dimensions' },
                    'Product Dimensions': { key: 'dimensions' },
                    'Parcel Dimensions': { key: 'dimensions' },
                    'Item Weight': { key: 'weight' },
                    Manufacturer: { key: 'manufacturer' },
                    'Release date': { key: 'available_from' },
                    'Date First Available': { key: 'available_from' },
                    'Item model number': { key: 'model_number' },
                    Department: { key: 'department' },
                },
            },
        },
        CN: {
            country: 'China',
            currency: 'CNY',
            host: 'www.amazon.cn',
            symbol: '¥',
            variants: {
                split_text: 'Click to select ',
            },
            best_seller: (text) => {
                if (text) {
                    const match = text.match(/(#[\d,|]+) in[\s\n ]([\w&'\s]+)/);
                    if (match) {
                        return { rank: parseInt(match[1].replace(/[^\d]/g, '')), category: match[2].trim() };
                    }
                }
                return '';
            },
            review_date: (date) => {
                const dateRegex = /on (.+)$/.exec(date);
                if (dateRegex) {
                    return {
                        date: dateRegex[1],
                        unix: moment(new Date(`${dateRegex[1]} 02:00:00`))
                            .utc()
                            .unix(),
                    };
                }
                return '';
            },
            price_format: (price) => {
                const formatedPrice = price.replace(/[^\d+\.]/g, '');
                return parseFloat(formatedPrice);
            },
            product_information: {
                id: [
                    '#detailBullets_feature_div > ul',
                    '#productDetails_detailBullets_sections1',
                    '#productDetails_techSpec_section_1',
                    '#productDetails_techSpec_section_2',
                    '#detailBulletsWrapper_feature_div > ul:nth-child(5)',
                ],
                fields: {
                    'Amazon Best Sellers Rank': { key: '', rank: true },
                    'Best-sellers rank': { key: '', rank: true },
                    'Best Sellers Rank': { key: '', rank: true },
                    商品尺寸: { key: 'dimensions' },
                    商品重量: { key: 'weight' },
                    制造商: { key: 'manufacturer' },
                },
            },
        },
        FR: {
            country: 'France',
            currency: 'EUR',
            host: 'www.amazon.fr',
            symbol: '€',
            variants: {
                split_text: 'Click to select ',
            },
            best_seller: (text) => {
                if (text) {
                    const match = text.match(/(#[\d,|]+) in[\s\n ]([\w&'\s]+)/);
                    if (match) {
                        return { rank: parseInt(match[1].replace(/[^\d]/g, '')), category: match[2].trim() };
                    }
                }
                return '';
            },
            review_date: (date) => {
                const dateRegex = /on (.+)$/.exec(date);
                if (dateRegex) {
                    return {
                        date: dateRegex[1],
                        unix: moment(new Date(`${dateRegex[1]} 02:00:00`))
                            .utc()
                            .unix(),
                    };
                }
                return '';
            },
            price_format: (price) => {
                const formatedPrice = price.replace(/[^\d+\,]/g, '').replace(',', '.');
                return parseFloat(formatedPrice);
            },
            product_information: {
                // <<------ NOT CORRECT! Requires translation of the {fields} key values. I don't have much time to do it
                id: [
                    '#detailBullets_feature_div > ul',
                    '#productDetails_detailBullets_sections1',
                    '#productDetails_techSpec_section_1',
                    '#productDetails_techSpec_section_2',
                    '#detailBulletsWrapper_feature_div > ul:nth-child(5)',
                ],
                fields: {
                    'Amazon Best Sellers Rank': { key: '', rank: true },
                    'Best-sellers rank': { key: '', rank: true },
                    'Best Sellers Rank': { key: '', rank: true },
                    'Package Dimensions': { key: 'dimensions' },
                    'Product Dimensions': { key: 'dimensions' },
                    'Parcel Dimensions': { key: 'dimensions' },
                    'Item Weight': { key: 'weight' },
                    Manufacturer: { key: 'manufacturer' },
                    'Release date': { key: 'available_from' },
                    'Date First Available': { key: 'available_from' },
                    'Item model number': { key: 'model_number' },
                    Department: { key: 'department' },
                },
            },
        },
        DE: {
            country: 'Germany',
            currency: 'EUR',
            host: 'www.amazon.de',
            symbol: '€',
            variants: {
                split_text: 'Click to select ',
            },
            best_seller: (text) => {
                if (text) {
                    const match = text.match(/(#[\d,|]+) in[\s\n ]([\w&'\s]+)/);
                    if (match) {
                        return { rank: parseInt(match[1].replace(/[^\d]/g, '')), category: match[2].trim() };
                    }
                }
                return '';
            },
            review_date: (date) => {
                const dateRegex = /on (.+)$/.exec(date);
                if (dateRegex) {
                    return {
                        date: dateRegex[1],
                        unix: moment(new Date(`${dateRegex[1]} 02:00:00`))
                            .utc()
                            .unix(),
                    };
                }
                return '';
            },
            price_format: (price) => {
                const formatedPrice = price.replace(/[^\d+\.]/g, '');
                return parseFloat(formatedPrice);
            },
            product_information: {
                // <<------ NOT CORRECT! Requires translation of the {fields} key values. I don't have much time to do it
                id: [
                    '#detailBullets_feature_div > ul',
                    '#productDetails_detailBullets_sections1',
                    '#productDetails_techSpec_section_1',
                    '#productDetails_techSpec_section_2',
                    '#detailBulletsWrapper_feature_div > ul:nth-child(5)',
                ],
                fields: {
                    'Amazon Best Sellers Rank': { key: '', rank: true },
                    'Best-sellers rank': { key: '', rank: true },
                    'Best Sellers Rank': { key: '', rank: true },
                    'Package Dimensions': { key: 'dimensions' },
                    'Product Dimensions': { key: 'dimensions' },
                    'Parcel Dimensions': { key: 'dimensions' },
                    'Item Weight': { key: 'weight' },
                    Manufacturer: { key: 'manufacturer' },
                    'Release date': { key: 'available_from' },
                    'Date First Available': { key: 'available_from' },
                    'Item model number': { key: 'model_number' },
                    Department: { key: 'department' },
                },
            },
        },
        IN: {
            country: 'India',
            currency: 'INR',
            host: 'www.amazon.in',
            symbol: '₹',
            variants: {
                split_text: 'Click to select ',
            },
            best_seller: (text) => {
                if (text) {
                    const match = text.match(/(#[\d,|]+) in[\s\n ]([\w&'\s]+)/);
                    if (match) {
                        return { rank: parseInt(match[1].replace(/[^\d]/g, '')), category: match[2].trim() };
                    }
                }
                return '';
            },
            review_date: (date) => {
                const dateRegex = /on (.+)$/.exec(date);
                if (dateRegex) {
                    return {
                        date: dateRegex[1],
                        unix: moment(new Date(`${dateRegex[1]} 02:00:00`))
                            .utc()
                            .unix(),
                    };
                }
                return '';
            },
            price_format: (price) => {
                const formatedPrice = price.replace(/[^\d+\.]/g, '');
                return parseFloat(formatedPrice);
            },
            product_information: {
                // <<------ NOT CORRECT! Requires translation of the {fields} key values. I don't have much time to do it
                id: [
                    '#detailBullets_feature_div > ul',
                    '#productDetails_detailBullets_sections1',
                    '#productDetails_techSpec_section_1',
                    '#productDetails_techSpec_section_2',
                    '#detailBulletsWrapper_feature_div > ul:nth-child(5)',
                ],
                fields: {
                    'Amazon Best Sellers Rank': { key: '', rank: true },
                    'Best-sellers rank': { key: '', rank: true },
                    'Best Sellers Rank': { key: '', rank: true },
                    'Package Dimensions': { key: 'dimensions' },
                    'Product Dimensions': { key: 'dimensions' },
                    'Parcel Dimensions': { key: 'dimensions' },
                    'Item Weight': { key: 'weight' },
                    Manufacturer: { key: 'manufacturer' },
                    'Release date': { key: 'available_from' },
                    'Date First Available': { key: 'available_from' },
                    'Item model number': { key: 'model_number' },
                    Department: { key: 'department' },
                },
            },
        },
        IT: {
            country: 'Italy',
            currency: 'EUR',
            host: 'www.amazon.it',
            symbol: '€',
            variants: {
                split_text: 'Click to select ',
            },
            best_seller: (text) => {
                if (text) {
                    const match = text.match(/(#[\d,|]+) in[\s\n ]([\w&'\s]+)/);
                    if (match) {
                        return { rank: parseInt(match[1].replace(/[^\d]/g, '')), category: match[2].trim() };
                    }
                }
                return '';
            },
            review_date: (date) => {
                const dateRegex = /on (.+)$/.exec(date);
                if (dateRegex) {
                    return {
                        date: dateRegex[1],
                        unix: moment(new Date(`${dateRegex[1]} 02:00:00`))
                            .utc()
                            .unix(),
                    };
                }
                return '';
            },
            price_format: (price) => {
                const formatedPrice = price.replace(/[^\d+\,]/g, '').replace(',', '.');
                return parseFloat(formatedPrice);
            },
            product_information: {
                // <<------ NOT CORRECT! Requires translation of the {fields} key values. I don't have much time to do it
                id: [
                    '#detailBullets_feature_div > ul',
                    '#productDetails_detailBullets_sections1',
                    '#productDetails_techSpec_section_1',
                    '#productDetails_techSpec_section_2',
                    '#detailBulletsWrapper_feature_div > ul:nth-child(5)',
                ],
                fields: {
                    'Amazon Best Sellers Rank': { key: '', rank: true },
                    'Best-sellers rank': { key: '', rank: true },
                    'Best Sellers Rank': { key: '', rank: true },
                    'Package Dimensions': { key: 'dimensions' },
                    'Product Dimensions': { key: 'dimensions' },
                    'Parcel Dimensions': { key: 'dimensions' },
                    'Item Weight': { key: 'weight' },
                    Manufacturer: { key: 'manufacturer' },
                    'Release date': { key: 'available_from' },
                    'Date First Available': { key: 'available_from' },
                    'Item model number': { key: 'model_number' },
                    Department: { key: 'department' },
                },
            },
        },
        MX: {
            country: 'Mexico',
            currency: 'MXN',
            host: 'www.amazon.com.mx',
            symbol: 'M$',
            review_date: (date) => {
                const dateRegex = /on (.+)$/.exec(date);
                if (dateRegex) {
                    return {
                        date: dateRegex[1],
                        unix: moment(new Date(`${dateRegex[1]} 02:00:00`))
                            .utc()
                            .unix(),
                    };
                }
                return '';
            },
            price_format: (price) => {
                const formatedPrice = price.replace(/[^\d+\.]/g, '');
                return parseFloat(formatedPrice);
            },
            variants: {
                split_text: 'Click to select ',
            },
            best_seller: (text) => {
                if (text) {
                    const match = text.match(/(#[\d,|]+) in[\s\n ]([\w&'\s]+)/);
                    if (match) {
                        return { rank: parseInt(match[1].replace(/[^\d]/g, '')), category: match[2].trim() };
                    }
                }
                return '';
            },
            product_information: {
                // <<------ NOT CORRECT! Requires translation of the {fields} key values. I don't have much time to do it
                id: [
                    '#detailBullets_feature_div > ul',
                    '#productDetails_detailBullets_sections1',
                    '#productDetails_techSpec_section_1',
                    '#productDetails_techSpec_section_2',
                    '#detailBulletsWrapper_feature_div > ul:nth-child(5)',
                ],
                fields: {
                    'Amazon Best Sellers Rank': { key: '', rank: true },
                    'Best-sellers rank': { key: '', rank: true },
                    'Best Sellers Rank': { key: '', rank: true },
                    'Package Dimensions': { key: 'dimensions' },
                    'Product Dimensions': { key: 'dimensions' },
                    'Parcel Dimensions': { key: 'dimensions' },
                    'Item Weight': { key: 'weight' },
                    Manufacturer: { key: 'manufacturer' },
                    'Release date': { key: 'available_from' },
                    'Date First Available': { key: 'available_from' },
                    'Item model number': { key: 'model_number' },
                    Department: { key: 'department' },
                },
            },
        },
        NL: {
            country: 'Netherlands',
            currency: 'EUR',
            host: 'www.amazon.nl',
            symbol: '€',
            review_date: (date) => {
                const dateRegex = /on (.+)$/.exec(date);
                if (dateRegex) {
                    return {
                        date: dateRegex[1],
                        unix: moment(new Date(`${dateRegex[1]} 02:00:00`))
                            .utc()
                            .unix(),
                    };
                }
                return '';
            },
            price_format: (price) => {
                const formatedPrice = price.replace(/[^\d+\,]/g, '').replace(',', '.');
                return parseFloat(formatedPrice);
            },
            variants: {
                split_text: 'Click to select ',
            },
            best_seller: (text) => {
                if (text) {
                    const match = text.match(/(#[\d,|]+) in[\s\n ]([\w&'\s]+)/);
                    if (match) {
                        return { rank: parseInt(match[1].replace(/[^\d]/g, '')), category: match[2].trim() };
                    }
                }
                return '';
            },
            product_information: {
                // <<------ NOT CORRECT! Requires translation of the {fields} key values. I don't have much time to do it
                id: [
                    '#detailBullets_feature_div > ul',
                    '#productDetails_detailBullets_sections1',
                    '#productDetails_techSpec_section_1',
                    '#productDetails_techSpec_section_2',
                    '#detailBulletsWrapper_feature_div > ul:nth-child(5)',
                ],
                fields: {
                    'Amazon Best Sellers Rank': { key: '', rank: true },
                    'Best-sellers rank': { key: '', rank: true },
                    'Best Sellers Rank': { key: '', rank: true },
                    'Package Dimensions': { key: 'dimensions' },
                    'Product Dimensions': { key: 'dimensions' },
                    'Parcel Dimensions': { key: 'dimensions' },
                    'Item Weight': { key: 'weight' },
                    Manufacturer: { key: 'manufacturer' },
                    'Release date': { key: 'available_from' },
                    'Date First Available': { key: 'available_from' },
                    'Item model number': { key: 'model_number' },
                    Department: { key: 'department' },
                },
            },
        },
        SG: {
            country: 'Singapore',
            currency: 'SGD',
            host: 'www.amazon.sg',
            symbol: '$',
            variants: {
                split_text: 'Click to select ',
            },
            best_seller: (text) => {
                if (text) {
                    const match = text.match(/(#[\d,|]+) in[\s\n ]([\w&'\s]+)/);
                    if (match) {
                        return { rank: parseInt(match[1].replace(/[^\d]/g, '')), category: match[2].trim() };
                    }
                }
                return '';
            },
            review_date: (date) => {
                const dateRegex = /on (.+)$/.exec(date);
                if (dateRegex) {
                    return {
                        date: dateRegex[1],
                        unix: moment(new Date(`${dateRegex[1]} 02:00:00`))
                            .utc()
                            .unix(),
                    };
                }
                return '';
            },
            price_format: (price) => {
                const formatedPrice = price.replace(/[^\d+\.]/g, '');
                return parseFloat(formatedPrice);
            },
            product_information: {
                id: [
                    '#detailBullets_feature_div > ul',
                    '#productDetails_detailBullets_sections1',
                    '#productDetails_techSpec_section_1',
                    '#productDetails_techSpec_section_2',
                    '#detailBulletsWrapper_feature_div > ul:nth-child(5)',
                ],
                fields: {
                    'Amazon Best Sellers Rank': { key: '', rank: true },
                    'Best-sellers rank': { key: '', rank: true },
                    'Best Sellers Rank': { key: '', rank: true },
                    'Package Dimensions': { key: 'dimensions' },
                    'Product Dimensions': { key: 'dimensions' },
                    'Parcel Dimensions': { key: 'dimensions' },
                    'Item Weight': { key: 'weight' },
                    Manufacturer: { key: 'manufacturer' },
                    'Release date': { key: 'available_from' },
                    'Date First Available': { key: 'available_from' },
                    'Item model number': { key: 'model_number' },
                    Department: { key: 'department' },
                },
            },
        },
        ES: {
            country: 'Spain',
            currency: 'EUR',
            host: 'www.amazon.es',
            symbol: '€',
            variants: {
                split_text: 'Click to select ',
            },
            best_seller: (text) => {
                if (text) {
                    const match = text.match(/(#[\d,|]+) in[\s\n ]([\w&'\s]+)/);
                    if (match) {
                        return { rank: parseInt(match[1].replace(/[^\d]/g, '')), category: match[2].trim() };
                    }
                }
                return '';
            },
            review_date: (date) => {
                const dateRegex = /on (.+)$/.exec(date);
                if (dateRegex) {
                    return {
                        date: dateRegex[1],
                        unix: moment(new Date(`${dateRegex[1]} 02:00:00`))
                            .utc()
                            .unix(),
                    };
                }
                return '';
            },
            price_format: (price) => {
                const formatedPrice = price.replace(/[^\d+\,]/g, '').replace(',', '.');
                return parseFloat(formatedPrice);
            },
            product_information: {
                id: [
                    '#detailBullets_feature_div > ul',
                    '#productDetails_detailBullets_sections1',
                    '#productDetails_techSpec_section_1',
                    '#productDetails_techSpec_section_2',
                    '#detailBulletsWrapper_feature_div > ul:nth-child(5)',
                ],
                fields: {
                    'Amazon Best Sellers Rank': { key: '', rank: true },
                    'Best-sellers rank': { key: '', rank: true },
                    'Best Sellers Rank': { key: '', rank: true },
                    'Dimensiones del producto': { key: 'dimensions' },
                    Fabricante: { key: 'manufacturer' },
                    'Producto en Amazon.es desde': { key: 'available_from' },
                    'Item model number': { key: 'model_number' },
                    Departamento: { key: 'department' },
                },
            },
        },
        TR: {
            country: 'Turkey',
            currency: 'TRY',
            host: 'www.amazon.com.tr',
            symbole: '₺',
            variants: {
                split_text: 'Click to select ',
            },
            best_seller: (text) => {
                if (text) {
                    const match = text.match(/(#[\d,|]+) in[\s\n ]([\w&'\s]+)/);
                    if (match) {
                        return { rank: parseInt(match[1].replace(/[^\d]/g, '')), category: match[2].trim() };
                    }
                }
                return '';
            },
            review_date: (date) => {
                const dateRegex = /on (.+)$/.exec(date);
                if (dateRegex) {
                    return {
                        date: dateRegex[1],
                        unix: moment(new Date(`${dateRegex[1]} 02:00:00`))
                            .utc()
                            .unix(),
                    };
                }
                return '';
            },
            price_format: (price) => {
                const formatedPrice = price.replace(/[^\d+\,]/g, '').replace(',', '.');
                return parseFloat(formatedPrice);
            },
            product_information: {
                id: [
                    '#detailBullets_feature_div > ul',
                    '#productDetails_detailBullets_sections1',
                    '#productDetails_techSpec_section_1',
                    '#productDetails_techSpec_section_2',
                    '#detailBulletsWrapper_feature_div > ul:nth-child(5)',
                ],
                fields: {
                    'Amazon Best Sellers Rank': { key: '', rank: true },
                    'Best-sellers rank': { key: '', rank: true },
                    'Best Sellers Rank': { key: '', rank: true },
                    'Ürün Boyutları': { key: 'dimensions' },
                    'Ürün Ağırlığı': { key: 'weight' },
                    Üretici: { key: 'manufacturer' },
                    'Satışa Sunulduğu İlk Tarih': { key: 'available_from' },
                    'Model Numarası': { key: 'model_number' },
                    Department: { key: 'department' },
                },
            },
        },
        AE: {
            country: 'United Arab Emirates',
            currency: 'AED',
            host: 'www.amazon.ae',
            symbol: 'د.إ',
            variants: {
                split_text: 'Click to select ',
            },
            best_seller: (text) => {
                if (text) {
                    const match = text.match(/(#[\d,|]+) in[\s\n ]([\w&'\s]+)/);
                    if (match) {
                        return { rank: parseInt(match[1].replace(/[^\d]/g, '')), category: match[2].trim() };
                    }
                }
                return '';
            },
            review_date: (date) => {
                const dateRegex = /on (.+)$/.exec(date);
                if (dateRegex) {
                    return {
                        date: dateRegex[1],
                        unix: moment(new Date(`${dateRegex[1]} 02:00:00`))
                            .utc()
                            .unix(),
                    };
                }
                return '';
            },
            price_format: (price) => {
                const formatedPrice = price.replace(/[^\d+\.]/g, '');
                return parseFloat(formatedPrice);
            },
            product_information: {
                id: [
                    '#detailBullets_feature_div > ul',
                    '#productDetails_detailBullets_sections1',
                    '#productDetails_techSpec_section_1',
                    '#productDetails_techSpec_section_2',
                    '#detailBulletsWrapper_feature_div > ul:nth-child(5)',
                ],
                fields: {
                    'Amazon Best Sellers Rank': { key: '', rank: true },
                    'Best-sellers rank': { key: '', rank: true },
                    'Best Sellers Rank': { key: '', rank: true },
                    'Package Dimensions': { key: 'dimensions' },
                    'Product Dimensions': { key: 'dimensions' },
                    'Parcel Dimensions': { key: 'dimensions' },
                    'Item Weight': { key: 'weight' },
                    Manufacturer: { key: 'manufacturer' },
                    'Release date': { key: 'available_from' },
                    'Date First Available': { key: 'available_from' },
                    'Item model number': { key: 'model_number' },
                    Department: { key: 'department' },
                },
            },
        },
        GB: {
            country: 'United Kingdom',
            currency: 'GBP',
            host: 'www.amazon.co.uk',
            symbol: '£',
            variants: {
                split_text: 'Click to select ',
            },
            best_seller: (text) => {
                if (text) {
                    const match = text.match(/(#[\d,|]+) in[\s\n ]([\w&'\s]+)/);
                    if (match) {
                        return { rank: parseInt(match[1].replace(/[^\d]/g, '')), category: match[2].trim() };
                    }
                }
                return '';
            },
            review_date: (date) => {
                const dateRegex = /on (.+)$/.exec(date);
                if (dateRegex) {
                    return {
                        date: dateRegex[1],
                        unix: moment(new Date(`${dateRegex[1]} 02:00:00`))
                            .utc()
                            .unix(),
                    };
                }
                return '';
            },
            price_format: (price) => {
                const formatedPrice = price.replace(/[^\d+\.]/g, '');
                return parseFloat(formatedPrice);
            },
            product_information: {
                id: [
                    '#detailBullets_feature_div > ul',
                    '#productDetails_detailBullets_sections1',
                    '#productDetails_techSpec_section_1',
                    '#productDetails_techSpec_section_2',
                    '#detailBulletsWrapper_feature_div > ul:nth-child(5)',
                ],
                fields: {
                    'Amazon Best Sellers Rank': { key: '', rank: true },
                    'Best-sellers rank': { key: '', rank: true },
                    'Best Sellers Rank': { key: '', rank: true },
                    'Package Dimensions': { key: 'dimensions' },
                    'Product Dimensions': { key: 'dimensions' },
                    'Parcel Dimensions': { key: 'dimensions' },
                    'Item Weight': { key: 'weight' },
                    Manufacturer: { key: 'manufacturer' },
                    'Release date': { key: 'available_from' },
                    'Date First Available': { key: 'available_from' },
                    'Item model number': { key: 'model_number' },
                    Department: { key: 'department' },
                },
            },
        },
        JP: {
            country: 'Japan',
            currency: 'JPY',
            host: 'www.amazon.jp',
            symbol: '¥',
            variants: {
                split_text: 'Click to select ',
            },
            best_seller: (text) => {
                if (text) {
                    const match = text.match(/(#[\d,|]+) in[\s\n ]([\w&'\s]+)/);
                    if (match) {
                        return { rank: parseInt(match[1].replace(/[^\d]/g, '')), category: match[2].trim() };
                    }
                }
                return '';
            },
            review_date: (date) => {
                const dateRegex = /on (.+)$/.exec(date);
                if (dateRegex) {
                    return {
                        date: dateRegex[1],
                        unix: moment(new Date(`${dateRegex[1]} 02:00:00`))
                            .utc()
                            .unix(),
                    };
                }
                return '';
            },
            price_format: (price) => {
                const formatedPrice = price.replace(/[^\d+]/g, '');
                return parseFloat(formatedPrice);
            },
            product_information: {
                id: [
                    '#detailBullets_feature_div > ul',
                    '#productDetails_detailBullets_sections1',
                    '#productDetails_techSpec_section_1',
                    '#productDetails_techSpec_section_2',
                    '#detailBulletsWrapper_feature_div > ul:nth-child(5)',
                ],
                fields: {
                    'Amazon Best Sellers Rank': { key: '', rank: true },
                    'Best-sellers rank': { key: '', rank: true },
                    'Best Sellers Rank': { key: '', rank: true },
                    梱包サイズ: { key: 'dimensions' },
                    発売日: { key: 'available_from' },
                    商品の重量: { key: 'weight' },
                },
            },
        },
        SE: {
            country: 'Sweden',
            currency: 'SEK',
            symbol: 'kr',
            host: 'www.amazon.se',
            variants: {
                split_text: 'Click to select ',
            },
            best_seller: (text) => {
                if (text) {
                    const match = text.match(/(#[\d,|]+) in[\s\n ]([\w&'\s]+)/);
                    if (match) {
                        return { rank: parseInt(match[1].replace(/[^\d]/g, '')), category: match[2].trim() };
                    }
                }
                return '';
            },
            review_date: (date) => {
                const dateRegex = /on (.+)$/.exec(date);
                if (dateRegex) {
                    return {
                        date: dateRegex[1],
                        unix: moment(new Date(`${dateRegex[1]} 02:00:00`))
                            .utc()
                            .unix(),
                    };
                }
                return '';
            },
            price_format: (price) => {
                const formatedPrice = price.replace(/[^\d+\,]/g, '');
                return parseFloat(formatedPrice.replace(/,/g, '.'));
            },
            product_information: {
                // <<------ NOT CORRECT! Requires translation of the {fields} key values. I don't have much time to do it
                id: [
                    '#detailBullets_feature_div > ul',
                    '#productDetails_detailBullets_sections1',
                    '#productDetails_techSpec_section_1',
                    '#productDetails_techSpec_section_2',
                    '#detailBulletsWrapper_feature_div > ul:nth-child(5)',
                ],
                fields: {
                    'Amazon Best Sellers Rank': { key: '', rank: true },
                    'Best-sellers rank': { key: '', rank: true },
                    'Best Sellers Rank': { key: '', rank: true },
                    'Package Dimensions': { key: 'dimensions' },
                    'Product Dimensions': { key: 'dimensions' },
                    'Parcel Dimensions': { key: 'dimensions' },
                    'Item Weight': { key: 'weight' },
                    Manufacturer: { key: 'manufacturer' },
                    'Release date': { key: 'available_from' },
                    'Date First Available': { key: 'available_from' },
                    'Item model number': { key: 'model_number' },
                    Department: { key: 'department' },
                },
            },
        },
        PL: {
            country: 'Poland',
            currency: 'Zł',
            symbol: 'zł',
            host: 'www.amazon.pl',
            variants: {
                split_text: 'Click to select ',
            },
            best_seller: (text) => {
                if (text) {
                    const match = text.match(/(#[\d,|]+) in[\s\n ]([\w&'\s]+)/);
                    if (match) {
                        return { rank: parseInt(match[1].replace(/[^\d]/g, '')), category: match[2].trim() };
                    }
                }
                return '';
            },
            review_date: (date) => {
                const dateRegex = /on (.+)$/.exec(date);
                if (dateRegex) {
                    return {
                        date: dateRegex[1],
                        unix: moment(new Date(`${dateRegex[1]} 02:00:00`))
                            .utc()
                            .unix(),
                    };
                }
                return '';
            },
            price_format: (price) => {
                const formatedPrice = price.replace(/[^\d+\,]/g, '');
                return parseFloat(formatedPrice.replace(/,/g, '.'));
            },
            product_information: {
                // <<------ NOT CORRECT! Requires translation of the {fields} key values. I don't have much time to do it
                id: [
                    '#detailBullets_feature_div > ul',
                    '#productDetails_detailBullets_sections1',
                    '#productDetails_techSpec_section_1',
                    '#productDetails_techSpec_section_2',
                    '#detailBulletsWrapper_feature_div > ul:nth-child(5)',
                ],
                fields: {
                    'Amazon Best Sellers Rank': { key: '', rank: true },
                    'Best-sellers rank': { key: '', rank: true },
                    'Best Sellers Rank': { key: '', rank: true },
                    'Package Dimensions': { key: 'dimensions' },
                    'Product Dimensions': { key: 'dimensions' },
                    'Parcel Dimensions': { key: 'dimensions' },
                    'Item Weight': { key: 'weight' },
                    Manufacturer: { key: 'manufacturer' },
                    'Release date': { key: 'available_from' },
                    'Date First Available': { key: 'available_from' },
                    'Item model number': { key: 'model_number' },
                    Department: { key: 'department' },
                },
            },
        },
    },
};
